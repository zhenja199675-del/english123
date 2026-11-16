/* Данные курса. Правлю руками, приложение читает при запуске. */

const BLOCKS = [
  {
    id: "b1",
    title: "Блок 1. Быть и называться",
    weeks: "недели 1–4",
    units: "Юниты 1–4 сейчас · 5–9 по мере прохождения",
    goal: "Представиться, спросить имя и откуда человек, описать, что делаешь сейчас.",
    lessons: ["u1", "u2", "u3", "u4"]
  },
  {
    id: "b2",
    title: "Блок 2. Что было",
    weeks: "недели 5–8",
    units: "Юниты 10–14, 23–24, 37–39",
    goal: "Рассказать, что было вчера, описать комнату.",
    lessons: []
  },
  {
    id: "b3",
    title: "Блок 3. Просить и спрашивать",
    weeks: "недели 9–12",
    units: "Юниты 29–35, 43–49",
    goal: "Попросить, запретить, задать десять вопросов.",
    lessons: []
  },
  {
    id: "b4",
    title: "Блок 4. Артикли и вещи",
    weeks: "недели 13–16",
    units: "Юниты 59–79",
    goal: "Говорить про вещи и людей, не теряя артикли.",
    lessons: []
  },
  {
    id: "b5",
    title: "Блок 5. Сравнивать и считать",
    weeks: "недели 17–20",
    units: "Юниты 80–96",
    goal: "Сравнивать, говорить «много/мало», ставить слова по порядку.",
    lessons: []
  },
  {
    id: "b6",
    title: "Блок 6. Планы и результат",
    weeks: "недели 21–24",
    units: "Юниты 25–28, 15–17, 97–108",
    goal: "Говорить о планах, о результате, о времени и месте.",
    lessons: []
  }
];

const LESSONS = [
  /* ===== Unit 1 ===== */
  {
    id: "u1",
    block: "b1",
    unit: 1,
    title: "am / is / are",
    subtitle: "Я студент, ты учитель",
    murphy: { pages: "2–3", exPage: "3", theory: "murphy/u1-2.jpg", ex: "murphy/u1-3.jpg", key: ["murphy/key-a.jpg", "murphy/key-b.jpg"] },
    sections: [
      {
        h: "A. Утверждение",
        p: "В русском «Я студент» — два слова. В английском между ними обязательно стоит глагол: <b>I am a student</b>. Смысла он почти не добавляет, но без него фраза разваливается.",
        table: [
          ["Кто", "Форма", "Пример"],
          ["I — я", "am", "I am a student. — Я студент."],
          ["he — он", "is", "He is my friend. — Он мой друг."],
          ["she — она", "is", "She is a teacher. — Она учитель."],
          ["it — оно", "is", "It is cold. — Холодно."],
          ["you — ты, вы", "are", "You are from Russia. — Ты из России."],
          ["we — мы", "are", "We are students. — Мы студенты."],
          ["they — они", "are", "They are friends. — Они друзья."]
        ]
      },
      {
        h: "B. Короткие формы",
        p: "В речи и переписке глагол почти всегда сжимается: <b>I'm</b>, <b>he's</b>, <b>she's</b>, <b>it's</b>, <b>you're</b>, <b>we're</b>, <b>they're</b>. На письме в упражнениях пиши полную форму, пока не запомнилось."
      },
      {
        h: "C. Отрицание",
        p: "Просто <b>not</b> после глагола: I am <b>not</b> a teacher. He <b>isn't</b> a student. They <b>aren't</b> here. Сокращения: isn't, aren't, а с I — I'm not."
      },
      {
        h: "Доп. от меня: артикль a",
        p: "Перед одним предметом или профессией нужен <b>a</b>: I am <b>a</b> student. В русском артикля нет, поэтому рука его пропускает. Костыль: если по-русски влезает «один, какой-то» — ставь a."
      }
    ],
    words: [
      { w: "student", tr: "/ˈstjuːdənt/ (стьюдент)", ru: "студент", ex: "I am a student.", exRu: "Я студент." },
      { w: "teacher", tr: "/ˈtiːtʃə/ (тичер)", ru: "учитель", ex: "She is a teacher.", exRu: "Она учитель." },
      { w: "name", tr: "/neɪm/ (нейм)", ru: "имя", ex: "My name is Arseniy.", exRu: "Меня зовут Арсений." },
      { w: "from", tr: "/frɒm/ (фром)", ru: "из", ex: "I am from Russia.", exRu: "Я из России." },
      { w: "hello", tr: "/həˈləʊ/ (хэлоу)", ru: "привет", ex: "Hello, I'm Arseniy.", exRu: "Привет, я Арсений." },
      { w: "friend", tr: "/frend/ (френд)", ru: "друг", ex: "He is my friend.", exRu: "Он мой друг." }
    ],
    listening: [
      { type: "choice", audio: "I am a student.", q: "Послушай фразу и выбери перевод.", opts: ["Я учитель.", "Я студент.", "Я дома."], answer: 1, explain: "I am a student — «Я студент»." },
      { type: "choice", audio: "Where are you from?", q: "Послушай вопрос и выбери перевод.", opts: ["Как тебя зовут?", "Откуда ты?", "Ты учитель?"], answer: 1, explain: "Where are you from? — «Откуда ты?»." },
      { type: "fill", audio: "I am a student.", q: "Послушай фразу и запиши её по-английски.", answers: ["i am a student", "i'm a student"], explain: "I am a student. Можно также записать сокращённо: I'm a student." }
    ],
    examples: [
      { en: "I am a student.", ru: "Я студент." },
      { en: "You are from Russia.", ru: "Ты из России." },
      { en: "We are friends.", ru: "Мы друзья." },
      { en: "She is not a teacher.", ru: "Она не учитель." }
    ],
    homework: [
      {
        id: "1.1",
        task: "Напиши краткую форму",
        items: [
          { q: "she is", a: ["she's"] },
          { q: "they are", a: ["they're"] },
          { q: "it is not", a: ["it isn't", "it's not"] },
          { q: "that is", a: ["that's"] },
          { q: "I am not", a: ["i'm not"] },
          { q: "you are not", a: ["you aren't", "you're not"] }
        ]
      },
      {
        id: "1.2",
        task: "Вставь am, is или are",
        items: [
          { q: "I ___ from Russia.", a: ["am"] },
          { q: "The weather ___ nice today.", a: ["is"] },
          { q: "My brother and I ___ students.", a: ["are"] },
          { q: "This bag ___ heavy.", a: ["is"] },
          { q: "They ___ my friends.", a: ["are"] },
          { q: "Emily ___ at home.", a: ["is"] },
          { q: "You ___ a good teacher.", a: ["are"] },
          { q: "I ___ not hungry.", a: ["am"] }
        ]
      },
      {
        id: "1.3",
        task: "Сделай отрицание",
        items: [
          { q: "I am a teacher. →", a: ["i am not a teacher", "i'm not a teacher"] },
          { q: "He is from Italy. →", a: ["he is not from italy", "he isn't from italy", "he's not from italy"] },
          { q: "We are late. →", a: ["we are not late", "we aren't late", "we're not late"] },
          { q: "They are students. →", a: ["they are not students", "they aren't students", "they're not students"] },
          { q: "It is cold today. →", a: ["it is not cold today", "it isn't cold today", "it's not cold today"] }
        ]
      },
      {
        id: "1.4",
        task: "Напиши о себе",
        items: [
          { q: "Я студент. (I ___ ...)", a: ["i am a student", "i'm a student"], sample: "I am a student." },
          { q: "Я из России. (I ___ ...)", a: ["i am from russia", "i'm from russia"], sample: "I am from Russia." },
          { q: "Я не учитель. (I ___ ...)", a: ["i am not a teacher", "i'm not a teacher"], sample: "I am not a teacher." }
        ]
      }
    ],
    exercises: [
      { type: "choice", q: "Выбери верное: «Она из Италии.»", opts: ["She from Italy.", "She is from Italy.", "She are from Italy."], answer: 1, explain: "Нужен глагол-связка is." },
      { type: "choice", q: "Выбери верное: «Я не студент.»", opts: ["I not a student.", "I am not a student.", "I don't a student."], answer: 1, explain: "not ставится после am. do/don't здесь не нужны." },
      { type: "translate", q: "Мы студенты.", answers: ["we are students", "we're students"], explain: "we are, а «студенты» во множественном числе — без артикля, с -s." }
    ]
  },

  /* ===== Unit 2 ===== */
  {
    id: "u2",
    block: "b1",
    unit: 2,
    title: "am / is / are: вопросы",
    subtitle: "Ты студент? Откуда ты?",
    murphy: { pages: "4–5", exPage: "5", theory: "murphy/u2-4.jpg", ex: "murphy/u2-5.jpg", key: ["murphy/key-a.jpg", "murphy/key-b.jpg"] },
    sections: [
      {
        h: "A. Вопрос",
        p: "Утверждение: <b>You are a student.</b> Вопрос: <b>Are you a student?</b> Глагол выходит на первое место, точка меняется на знак вопроса. Никаких do/does здесь нет.",
        table: [
          ["Утверждение", "Вопрос"],
          ["You are a student.", "Are you a student?"],
          ["She is from Italy.", "Is she from Italy?"],
          ["They are here.", "Are they here?"]
        ]
      },
      {
        h: "B. Короткие ответы",
        p: "<b>Yes, I am.</b> / <b>No, I'm not.</b> С he/she: <b>Yes, she is.</b> / <b>No, she isn't.</b> В конце короткого ответа сокращение не ставим: нельзя «Yes, I'm»."
      },
      {
        h: "C. Вопросы со словами",
        p: "Вопросительное слово ставится перед глаголом.",
        table: [
          ["Вопрос", "Перевод"],
          ["What is your name?", "Как тебя зовут?"],
          ["Where are you from?", "Откуда ты?"],
          ["How are you?", "Как дела?"],
          ["Who is he?", "Кто он?"]
        ]
      },
      {
        h: "Доп. от меня: ловушка",
        p: "«Как тебя зовут?» — это <b>What is your name?</b>, а не «How are you called». Дословный перевод из русского здесь не работает."
      }
    ],
    words: [
      { w: "where", tr: "/weə/ (уэа)", ru: "где, куда, откуда", ex: "Where are you from?", exRu: "Откуда ты?" },
      { w: "what", tr: "/wɒt/ (уот)", ru: "что, какой", ex: "What is your name?", exRu: "Как тебя зовут?" },
      { w: "how", tr: "/haʊ/ (хау)", ru: "как", ex: "How are you?", exRu: "Как дела?" },
      { w: "who", tr: "/huː/ (ху)", ru: "кто", ex: "Who is he?", exRu: "Кто он?" },
      { w: "fine", tr: "/faɪn/ (файн)", ru: "хорошо", ex: "I'm fine, thank you.", exRu: "Я в порядке, спасибо." },
      { w: "sorry", tr: "/ˈsɒri/ (сорри)", ru: "извини", ex: "Sorry, I'm late.", exRu: "Извини, я опоздал." }
    ],
    listening: [
      { type: "choice", audio: "Is she from Italy?", q: "Послушай вопрос и выбери перевод.", opts: ["Она из Италии?", "Он из России?", "Ты студент?"], answer: 0, explain: "Is she from Italy? — «Она из Италии?»." },
      { type: "choice", audio: "My name is Anna.", q: "Послушай фразу и выбери перевод.", opts: ["Анна — моя подруга.", "Меня зовут Анна.", "Анна дома."], answer: 1, explain: "My name is Anna — «Меня зовут Анна»." },
      { type: "fill", audio: "Where are you from?", q: "Послушай вопрос и запиши его по-английски.", answers: ["where are you from"], explain: "Where are you from? — «Откуда ты?»." }
    ],
    examples: [
      { en: "Are you a student?", ru: "Ты студент?" },
      { en: "Is she from Italy?", ru: "Она из Италии?" },
      { en: "Where are you from?", ru: "Откуда ты?" },
      { en: "What is your name?", ru: "Как тебя зовут?" }
    ],
    homework: [
      {
        id: "2.1",
        task: "Составь вопрос из утверждения",
        items: [
          { q: "You are a student. →", a: ["are you a student"] },
          { q: "She is from Italy. →", a: ["is she from italy"] },
          { q: "They are at home. →", a: ["are they at home"] },
          { q: "He is a doctor. →", a: ["is he a doctor"] },
          { q: "You are tired. →", a: ["are you tired"] },
          { q: "It is cold. →", a: ["is it cold"] }
        ]
      },
      {
        id: "2.2",
        task: "Вставь пропущенное",
        items: [
          { q: "___ your name Anna?", a: ["is"] },
          { q: "___ you from Russia?", a: ["are"] },
          { q: "Where ___ he from?", a: ["is"] },
          { q: "___ they students?", a: ["are"] },
          { q: "How ___ you?", a: ["are"] }
        ]
      },
      {
        id: "2.3",
        task: "Короткий ответ",
        items: [
          { q: "Are you a teacher? (нет) → No, ___", a: ["i'm not", "i am not"] },
          { q: "Is she from Italy? (да) → Yes, ___", a: ["she is"] },
          { q: "Are they students? (нет) → No, ___", a: ["they aren't", "they are not", "they're not"] },
          { q: "Are you tired? (да) → Yes, ___", a: ["i am"] },
          { q: "Is he your friend? (да) → Yes, ___", a: ["he is"] }
        ]
      },
      {
        id: "2.4",
        task: "Напиши о себе",
        items: [
          { q: "Как тебя зовут?", a: ["what is your name", "what's your name"], sample: "What is your name?" },
          { q: "Откуда ты?", a: ["where are you from"], sample: "Where are you from?" }
        ]
      }
    ],
    exercises: [
      { type: "choice", q: "Ответ на «Are you a teacher?» — если нет:", opts: ["No, I not.", "No, I'm not.", "No, I amn't."], answer: 1, explain: "Короткий отрицательный ответ: No, I'm not." },
      { type: "choice", q: "Где ошибка: «Where you are from?»", opts: ["Всё верно", "you и are надо поменять местами", "нужно do"], answer: 1, explain: "В вопросе глагол перед подлежащим: Where are you from?" }
    ]
  },

  /* ===== Unit 3 ===== */
  {
    id: "u3",
    block: "b1",
    unit: 3,
    title: "I am doing",
    subtitle: "Делаю прямо сейчас",
    murphy: { pages: "6–7", exPage: "7", theory: "murphy/u3-6.jpg", ex: "murphy/u3-7.jpg", key: ["murphy/key-a.jpg", "murphy/key-b.jpg"] },
    theory: [
      {
        h: "Формула",
        p: "<b>am / is / are + глагол с -ing</b>. I am reading. — Я читаю (сейчас). She is working. — Она работает (сейчас)."
      },
      {
        h: "Когда использовать",
        p: "Действие идёт в момент речи: <b>I am writing a message now.</b> Не «вообще», а именно сейчас. «Вообще» — это Present Simple, он в юните 5."
      },
      {
        h: "Как писать -ing",
        table: [
          ["Правило", "Пример"],
          ["просто добавляем -ing", "read → reading, work → working"],
          ["конечная -e исчезает", "write → writing, make → making"],
          ["удваиваем согласную", "run → running, sit → sitting"],
          ["-ie меняется на -y", "lie → lying, die → dying"]
        ]
      },
      {
        h: "Отрицание и вопрос",
        p: "Отрицание: I am <b>not</b> reading. Вопрос: <b>Are</b> you reading? Всё крутится вокруг am/is/are, глагол с -ing не двигается."
      }
    ],
    words: [
      { w: "read", tr: "/riːd/ (рид)", ru: "читать", ex: "I am reading a book.", exRu: "Я читаю книгу." },
      { w: "write", tr: "/raɪt/ (райт)", ru: "писать", ex: "She is writing a message.", exRu: "Она пишет сообщение." },
      { w: "work", tr: "/wɜːk/ (уорк)", ru: "работать", ex: "He is working now.", exRu: "Он сейчас работает." },
      { w: "now", tr: "/naʊ/ (нау)", ru: "сейчас", ex: "I am busy now.", exRu: "Я сейчас занят." },
      { w: "eat", tr: "/iːt/ (ит)", ru: "есть, кушать", ex: "We are eating lunch.", exRu: "Мы обедаем." },
      { w: "look", tr: "/lʊk/ (лук)", ru: "смотреть", ex: "I am looking at the photo.", exRu: "Я смотрю на фото." },
      { w: "listen", tr: "/ˈlɪsn/ (лисн)", ru: "слушать", ex: "I am listening.", exRu: "Я слушаю." }
    ],
    listening: [
      { type: "choice", audio: "She is writing a message.", q: "Послушай фразу и выбери перевод.", opts: ["Она пишет сообщение.", "Она читает книгу.", "Она слушает музыку."], answer: 0, explain: "She is writing a message — «Она пишет сообщение»." },
      { type: "choice", audio: "They are eating lunch.", q: "Послушай фразу и выбери перевод.", opts: ["Они идут домой.", "Они обедают.", "Они работают."], answer: 1, explain: "They are eating lunch — «Они обедают»." },
      { type: "fill", audio: "She is writing a message.", q: "Послушай фразу и запиши её по-английски.", answers: ["she is writing a message", "she's writing a message"], explain: "She is writing a message — «Она пишет сообщение»." }
    ],
    examples: [
      { en: "I am reading a book.", ru: "Я читаю книгу." },
      { en: "She is not working today.", ru: "Она сегодня не работает." },
      { en: "They are eating lunch.", ru: "Они обедают." },
      { en: "Are you listening?", ru: "Ты слушаешь?" }
    ],
    homework: [
      {
        id: "3.1",
        task: "Добавь окончание -ing",
        items: [
          { q: "read →", a: ["reading"] },
          { q: "write →", a: ["writing"] },
          { q: "make →", a: ["making"] },
          { q: "run →", a: ["running"] },
          { q: "lie →", a: ["lying"] }
        ]
      },
      {
        id: "3.2",
        task: "Вставь am / is / are и глагол с -ing",
        items: [
          { q: "I ___ ___ a book now. (read)", a: ["am reading"] },
          { q: "She ___ ___ a message. (write)", a: ["is writing"] },
          { q: "They ___ ___ lunch. (eat)", a: ["are eating"] },
          { q: "He ___ ___ now. (work)", a: ["is working"] },
          { q: "We ___ ___ at the photo. (look)", a: ["are looking"] }
        ]
      },
      {
        id: "3.3",
        task: "Переведи на английский",
        items: [
          { q: "Я сейчас читаю книгу.", a: ["i am reading a book now", "i'm reading a book now"] },
          { q: "Она сегодня не работает.", a: ["she is not working today", "she isn't working today", "she's not working today"] },
          { q: "Он сейчас работает.", a: ["he is working now", "he's working now"] },
          { q: "Мы обедаем.", a: ["we are eating lunch", "we're eating lunch"] },
          { q: "Ты слушаешь?", a: ["are you listening"] }
        ]
      }
    ],
    exercises: [
      { type: "fill", q: "I ___ reading a book. (am / is / are)", answers: ["am"], explain: "I → am." },
      { type: "fill", q: "She is ___ (write) a message.", answers: ["writing"], explain: "Конечная -e исчезает: write → writing." },
      { type: "fill", q: "They ___ working now. (am / is / are)", answers: ["are"], explain: "they → are." },
      { type: "translate", q: "Я сейчас ем.", answers: ["i am eating now", "i'm eating now"], explain: "am + eating, now — «сейчас»." },
      { type: "choice", q: "Как правильно: «Он бежит.»", opts: ["He is runing.", "He is running.", "He running."], answer: 1, explain: "run → running, согласная удваивается." },
      { type: "translate", q: "Ты слушаешь?", answers: ["are you listening"], explain: "Вопрос: Are you + listening." },
      { type: "choice", q: "Что значит «I am not working today»?", opts: ["Я не работаю вообще", "Я сегодня не работаю", "Я не хочу работать"], answer: 1, explain: "Здесь речь про сегодня, момент вокруг настоящего." }
    ]
  },

  /* ===== Unit 4 ===== */
  {
    id: "u4",
    block: "b1",
    unit: 4,
    title: "Are you doing?",
    subtitle: "Вопросы про «сейчас»",
    murphy: { pages: "8–9", exPage: "9", theory: "murphy/u4-8.jpg", ex: "murphy/u4-9.jpg", key: ["murphy/key-a.jpg", "murphy/key-b.jpg"] },
    theory: [
      {
        h: "Вопрос",
        p: "<b>Are you working?</b> — Ты работаешь (сейчас)? <b>Is she reading?</b> Глагол am/is/are идёт вперёд, -ing остаётся на месте."
      },
      {
        h: "Короткие ответы",
        p: "<b>Yes, I am.</b> / <b>No, I'm not.</b> <b>Yes, she is.</b> / <b>No, she isn't.</b> В конце короткого ответа сокращение не ставим."
      },
      {
        h: "Вопросы со словами",
        table: [
          ["Вопрос", "Перевод"],
          ["What are you doing?", "Что ты делаешь?"],
          ["Where is he going?", "Куда он идёт?"],
          ["Why are they laughing?", "Почему они смеются?"],
          ["Who is she talking to?", "С кем она говорит?"]
        ]
      }
    ],
    words: [
      { w: "do", tr: "/duː/ (ду)", ru: "делать", ex: "What are you doing?", exRu: "Что ты делаешь?" },
      { w: "go", tr: "/ɡəʊ/ (гоу)", ru: "идти", ex: "I am going home.", exRu: "Я иду домой." },
      { w: "home", tr: "/həʊm/ (хоум)", ru: "домой, дома", ex: "She is at home.", exRu: "Она дома." },
      { w: "talk", tr: "/tɔːk/ (ток)", ru: "говорить, разговаривать", ex: "Who are you talking to?", exRu: "С кем ты говоришь?" },
      { w: "listen", tr: "/ˈlɪsn/ (лисн)", ru: "слушать", ex: "I am listening to music.", exRu: "Я слушаю музыку." },
      { w: "music", tr: "/ˈmjuːzɪk/ (мьюзик)", ru: "музыка", ex: "He likes music.", exRu: "Он любит музыку." }
    ],
    listening: [
      { type: "choice", audio: "What are you doing?", q: "Послушай вопрос и выбери перевод.", opts: ["Куда ты идёшь?", "Что ты делаешь?", "Ты слушаешь музыку?"], answer: 1, explain: "What are you doing? — «Что ты делаешь?»." },
      { type: "choice", audio: "I am going home.", q: "Послушай фразу и выбери перевод.", opts: ["Я иду домой.", "Я работаю дома.", "Я слушаю музыку."], answer: 0, explain: "I am going home — «Я иду домой»." },
      { type: "fill", audio: "What are you doing?", q: "Послушай вопрос и запиши его по-английски.", answers: ["what are you doing"], explain: "What are you doing? — «Что ты делаешь?»." }
    ],
    examples: [
      { en: "What are you doing?", ru: "Что ты делаешь?" },
      { en: "Is he working now?", ru: "Он сейчас работает?" },
      { en: "Where are they going?", ru: "Куда они идут?" },
      { en: "I'm not listening to music.", ru: "Я не слушаю музыку." }
    ],
    homework: [
      {
        id: "4.1",
        task: "Поставь am / is / are в начало вопроса",
        items: [
          { q: "___ you working?", a: ["are"] },
          { q: "___ she reading?", a: ["is"] },
          { q: "___ they going home?", a: ["are"] },
          { q: "___ he listening to music?", a: ["is"] },
          { q: "___ we eating now?", a: ["are"] }
        ]
      },
      {
        id: "4.2",
        task: "Вставь am, is или are",
        items: [
          { q: "What ___ you doing?", a: ["are"] },
          { q: "Where ___ she going?", a: ["is"] },
          { q: "Why ___ they laughing?", a: ["are"] },
          { q: "Who ___ he talking to?", a: ["is"] },
          { q: "What ___ they doing?", a: ["are"] }
        ]
      },
      {
        id: "4.3",
        task: "Ответь коротко или переведи",
        items: [
          { q: "Are you listening? (да) → Yes, ___", a: ["i am"] },
          { q: "Is she working? (нет) → No, ___", a: ["she isn't", "she is not", "she's not"] },
          { q: "Что ты делаешь? →", a: ["what are you doing"] },
          { q: "Я иду домой. →", a: ["i am going home", "i'm going home"] }
        ]
      }
    ],
    exercises: [
      { type: "translate", q: "Что ты делаешь?", answers: ["what are you doing"], explain: "What + are + you + doing." },
      { type: "fill", q: "Where ___ they going?", answers: ["are"], explain: "they → are." },
      { type: "translate", q: "Он сейчас работает?", answers: ["is he working now", "is he working"], explain: "Is he working? — порядок: is, he, working." },
      { type: "choice", q: "Ответ на «Are you listening?» — если да:", opts: ["Yes, I'm.", "Yes, I am.", "Yes, I do."], answer: 1, explain: "В коротком ответе полная форма: Yes, I am." },
      { type: "translate", q: "Я иду домой.", answers: ["i am going home", "i'm going home"], explain: "go → going, home без предлога." },
      { type: "choice", q: "Где ошибка: «What you are doing?»", opts: ["Всё верно", "are и you надо поменять местами", "нужно do"], answer: 1, explain: "What are you doing?" }
    ]
  }
];

/* Сколько упражнений в каждом юните Murphy, 4-е издание.
   Взято из ключа с ответами в конце книги: юнит N -> упражнения N.1 … N.k. */
const EXCOUNT = {"1":6,"2":5,"3":4,"4":4,"5":5,"6":5,"7":4,"8":3,"9":5,"10":4,"11":5,"12":5,"13":4,"14":2,"15":2,"16":4,"17":4,"18":4,"19":5,"20":4,"21":4,"22":3,"23":5,"24":4,"25":4,"26":4,"27":5,"28":5,"29":4,"30":4,"31":5,"32":5,"33":6,"35":3,"37":2,"38":3,"39":5,"40":6,"41":4,"42":3,"43":5,"44":4,"45":3,"46":5,"47":5,"48":4,"49":6,"50":3,"51":3,"52":4,"53":3,"54":5,"55":3,"56":5,"57":3,"58":4,"59":5,"60":6,"61":4,"62":4,"63":4,"64":3,"65":4,"66":4,"67":3,"70":4,"71":3,"72":3,"73":2,"74":3,"75":3,"76":4,"77":4,"78":4,"79":4,"80":5,"81":3,"82":3,"83":5,"84":5,"85":4,"86":4,"87":4,"88":3,"89":4,"90":3,"91":4,"92":4,"93":3,"97":3,"98":4,"99":4,"100":4,"101":4,"102":4,"103":5,"104":2,"105":4,"106":2,"107":2,"108":5,"109":3,"110":3,"111":3,"112":5,"113":4,"114":3,"115":4};

const TEST_SIZE = 10;
