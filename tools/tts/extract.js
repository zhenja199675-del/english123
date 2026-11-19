/* Извлекает из data.js и exercises.js все озвучиваемые тексты:
   data.js: words[].w, examples[].en, listening[].audio
   exercises.js: BOOK_EXERCISES[*].audio
   Результат: tools/tts/texts.json — массив строк без дублей. */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const src = fs.readFileSync(path.join(root, "data.js"), "utf8");
eval(src + ";global.__data = { LESSONS };");
const lessons = global.__data.LESSONS;

const exSrc = fs.readFileSync(path.join(root, "exercises.js"), "utf8");
global.window = {};
eval(exSrc);
const bookExercises = global.window.BOOK_EXERCISES || {};

const texts = new Set();
for (const lesson of lessons) {
  for (const word of lesson.words || []) {
    if (word.w) texts.add(word.w);
  }
  for (const example of lesson.examples || []) {
    if (example.en) texts.add(example.en);
  }
  for (const item of lesson.listening || []) {
    if (item.audio) texts.add(item.audio);
  }
}

for (const items of Object.values(bookExercises)) {
  for (const ex of items || []) {
    if (ex.audio) texts.add(ex.audio);
  }
}

const out = [...texts];
fs.writeFileSync(
  path.join(__dirname, "texts.json"),
  JSON.stringify(out, null, 2) + "\n",
  "utf8"
);
console.log("lessons:", lessons.length);
console.log("unique texts:", out.length);
