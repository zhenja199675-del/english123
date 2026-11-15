# Приложение курса

Одностраничное приложение без сборки и без сервера. Открывается в браузере, ставится на главный экран телефона.

## Что внутри

- `index.html` — весь интерфейс и логика.
- `data.js` — уроки, слова, упражнения. Правлю руками, приложение читает при запуске.
- `manifest.webmanifest` — чтобы ставилось как приложение.
- `sw.js` — офлайн-кеш.
- `icon-192.png`, `icon-512.png`, `favicon.png` — иконки.

Прогресс, ответы и журнал ошибок хранятся в `localStorage` браузера, то есть только на устройстве. Никаких аккаунтов и отправки данных наружу. Если почистить данные браузера — прогресс пропадёт.

## Как выложить на GitHub Pages

1. На github.com нажать **New repository**.
2. Имя: `english-app`. Видимость: **Public**. **Create repository**.
3. На странице репозитория: **Add file → Upload files**, перетащить все файлы из этой папки (кроме этого README, он не нужен). **Commit changes**.
4. **Settings → Pages**. В разделе «Build and deployment»: Source = **Deploy from a branch**, Branch = **main**, папка **/ (root)**. **Save**.
5. Подождать 1–2 минуты, обновить страницу. Появится адрес вида
   `https://ИМЯ.github.io/english-app/`
6. Открыть этот адрес на телефоне в Chrome → меню (три точки) → **Добавить на главный экран**.

## Через терминал, если лень мышкой

Из папки `D:\opencode\123\english\app`:

```powershell
git init -b main
git add .
git commit -m "english app"
git remote add origin https://github.com/ИМЯ/english-app.git
git push -u origin main
```

Перед `push` нужен созданный на github.com пустой репозиторий `english-app`.

## Обновить уроки

Правлю `data.js`, коммичу, пушу. На телефоне приложение подтянет новую версию при следующем открытии: страница берётся из сети, кеш — только на случай офлайна.

## Локальный просмотр

```powershell
cd D:\opencode\123\english\app
python -m http.server 8123
```

Затем открыть `http://127.0.0.1:8123/`.
