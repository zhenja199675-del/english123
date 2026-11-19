# Синтез аудио для курса через Kokoro TTS.
# Читает tools/tts/texts.json, синтезирует каждый текст, конвертирует в MP3
# через ffmpeg и складывает в audio/. Имя файла = sha1(voice + текст).
# Результат: audio/manifest.json вида {"voice": "...", "items": {"текст": "audio/xxx.mp3"}}.
#
# Запуск из папки app (PowerShell):
#   .venv\Scripts\python.exe tools\tts\generate.py
#
# Повторный запуск пропускает уже готовые mp3, если не передать --force.

import argparse
import hashlib
import json
import subprocess
import sys
from pathlib import Path

APP_ROOT = Path(__file__).resolve().parents[2]
TEXTS_PATH = Path(__file__).resolve().parent / "texts.json"
AUDIO_DIR = APP_ROOT / "audio"
MANIFEST_PATH = AUDIO_DIR / "manifest.json"

KOKORO_SAMPLE_RATE = 24000
MP3_BITRATE = "64k"

VOICE = "bf_emma"
LANG = "en-gb"


def find_ffmpeg() -> str:
    """ffmpeg установлен в системе (ffmpeg 9). Проверяем, что доступен."""
    try:
        subprocess.run(
            ["ffmpeg", "-version"], capture_output=True, check=True
        )
        return "ffmpeg"
    except (OSError, subprocess.CalledProcessError):
        sys.exit("ffmpeg не найден в PATH. Установи его или добавь в PATH.")


def load_pipeline():
    from kokoro import KPipeline

    pipeline = KPipeline(lang_code=LANG, repo_id="hexgrad/Kokoro-82M")
    try:
        pipeline.load_voice(VOICE)
    except Exception as exc:  # noqa: BLE001
        sys.exit(f"Голос {VOICE!r} недоступен: {exc}")
    return pipeline


def synth_to_wav(pipeline, text: str, wav_path: Path) -> bool:
    """Синтезирует текст в WAV. Возвращает True при успехе."""
    import soundfile as sf

    chunks = list(pipeline(text, voice=VOICE))
    if not chunks:
        return False
    import numpy as np

    # Склеиваем чанки, если их несколько
    audio = chunks[0].audio if len(chunks) == 1 else np.concatenate(
        [c.audio for c in chunks]
    )
    sf.write(wav_path, audio, KOKORO_SAMPLE_RATE)
    return True


def wav_to_mp3(wav_path: Path, mp3_path: Path) -> None:
    subprocess.run(
        [
            "ffmpeg", "-y", "-loglevel", "error",
            "-i", str(wav_path),
            "-ar", str(KOKORO_SAMPLE_RATE),
            "-ac", "1",
            "-codec:a", "libmp3lame",
            "-b:a", MP3_BITRATE,
            str(mp3_path),
        ],
        check=True,
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true",
                        help="пересинтезировать даже существующие файлы")
    args = parser.parse_args()

    texts = json.loads(TEXTS_PATH.read_text(encoding="utf-8"))
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    manifest = {"voice": VOICE, "items": {}}
    if MANIFEST_PATH.exists() and not args.force:
        old = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
        if old.get("voice") == VOICE:
            manifest["items"] = old.get("items", {})

    ffmpeg = find_ffmpeg()
    print(f"ffmpeg: ok ({ffmpeg})")
    print(f"Текстов: {len(texts)}, голос: {VOICE}")

    pipeline = load_pipeline()

    ok, skipped, failed = 0, 0, []
    for i, text in enumerate(texts, 1):
        digest = hashlib.sha1(f"{VOICE}\n{text}".encode("utf-8")).hexdigest()[:12]
        mp3_rel = f"audio/{digest}.mp3"
        mp3_path = APP_ROOT / mp3_rel
        manifest["items"][text] = mp3_rel

        if mp3_path.exists() and not args.force:
            skipped += 1
            continue

        wav_path = AUDIO_DIR / f"_tmp_{digest}.wav"
        try:
            if not synth_to_wav(pipeline, text, wav_path):
                raise RuntimeError("Kokoro вернул пустой результат")
            wav_to_mp3(wav_path, mp3_path)
            ok += 1
            print(f"[{i}/{len(texts)}] ok: {text[:50]!r} -> {mp3_rel}")
        except Exception as exc:  # noqa: BLE001
            failed.append((text, repr(exc)))
            print(f"[{i}/{len(texts)}] FAIL: {text[:50]!r}: {exc}")
        finally:
            wav_path.unlink(missing_ok=True)

    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"\nГотово: новых {ok}, пропущено {skipped}, ошибок {len(failed)}")
    print(f"Manifest: {MANIFEST_PATH}")
    if failed:
        print("\nОшибки:")
        for text, err in failed:
            print(f"  {text!r}: {err}")


if __name__ == "__main__":
    main()
