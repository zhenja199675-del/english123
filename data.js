/* Данные курса. Правлю руками, приложение читает при запуске. */

const BLOCKS = [
  {
    id: "b1",
    title: "Блок 1. Быть и называться",
    weeks: "недели 1–4",
    units: "Юниты 1–9",
    goal: "Рассказать о себе пятью фразами, спросить имя, откуда и чем занимаешься.",
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
  {
    id: "u1",
    block: "b1",
    unit: 1,
    title: "am / is / are",
    subtitle: "Я студент, ты учитель",
    theory: [
      {
        h: "Зачем нужен глагол-связка",
        p: "По-русски: «Я студент». Два слова. По-английски между ними обязательно стоит глагол: <b>I am a student</b>. Это как старое русское «аз есмь студент». Без него английская фраза разваливается."
      },
      {
        h: "Три формы",
        table: [
          ["Кто", "Форма", "Пример"],
          ["I — я", "am", "I am a student. — Я студент."],
          ["you — ты, вы", "are", "You are a teacher. — Ты учитель."],
          ["we — мы", "are", "We are from Russia. — Мы из России."],
          ["they — они", "are", "They are students. — Они студенты."],
          ["he — он", "is", "He is my friend. — Он мой друг."],
          ["she — она", "is", "She is a doctor. — Она врач."],
          ["it — оно", "is", "It is cold. — Холодно."]
        ]
      },
      {
        h: "Короткие формы",
        p: "В речи и в переписке почти всегда сокращают: <b>I'm</b>, <b>you're</b>, <b>he's</b>, <b>she's</b>, <b>it's</b>, <b>we're</b>, <b>they're</b>. На письме в упражнениях лучше писать полную форму, пока не запомнилось."
      },
      {
        h: "Артикль a",
        p: "Перед одним предметом или профессией нужен <b>a</b>: I am <b>a</b> student. В русском артикля нет, поэтому рука его пропускает. Правило-костыль: если по-русски можно вставить «один, какой-то» — ставь a."
      },
      {
        h: "Отрицание",
        p: "Просто <b>not</b> после глагола: I am <b>not</b> a teacher. He <b>isn't</b> a student. They <b>aren't</b> here."
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
    examples: [
      { en: "I am a student.", ru: "Я студент." },
      { en: "You are from Russia.", ru: "Ты из России." },
      { en: "We are friends.", ru: "Мы друзья." },
      { en: "She is not a teacher.", ru: "Она не учитель." }
    ],
    exercises: [
      { type: "fill", q: "I ___ a student.", answers: ["am"], explain: "С «I» всегда am." },
      { type: "fill", q: "She ___ my friend.", answers: ["is"], explain: "he / she / it — is." },
      { type: "fill", q: "We ___ from Russia.", answers: ["are"], explain: "we / you / they — are." },
      { type: "translate", q: "Он не учитель.", answers: ["he is not a teacher", "he isn't a teacher", "he's not a teacher"], explain: "Отрицание: is + not. И артикль a перед профессией." },
      { type: "translate", q: "Мы студенты.", answers: ["we are students", "we're students"], explain: "we are, а «студенты» во множественном числе — без артикля, с -s." },
      { type: "choice", q: "Выбери верное: «Она из Италии.»", opts: ["She from Italy.", "She is from Italy.", "She are from Italy."], answer: 1, explain: "Нужен глагол-связка is." },
      { type: "choice", q: "Выбери верное: «Я не студент.»", opts: ["I not a student.", "I am not a student.", "I don't a student."], answer: 1, explain: "not ставится после am. do/don't здесь не нужны." },
      { type: "translate", q: "Ты учитель.", answers: ["you are a teacher", "you're a teacher"], explain: "you are + артикль a." }
    ]
  },
  {
    id: "u2",
    block: "b1",
    unit: 2,
    title: "am / is / are: вопросы",
    subtitle: "Ты студент? Откуда ты?",
    theory: [
      {
        h: "Вопрос переворачивает фразу",
        p: "Утверждение: <b>You are a student.</b> Вопрос: <b>Are you a student?</b> Глагол выходит на первое место, точка меняется на знак вопроса. Никаких do/does здесь не нужно."
      },
      {
        h: "Как отвечать",
        p: "Коротко: <b>Yes, I am.</b> / <b>No, I'm not.</b> Нельзя «Yes, I'm» — сокращение в конце ответа не ставится. С he/she: <b>Yes, he is.</b> / <b>No, he isn't.</b>"
      },
      {
        h: "Вопросы с вопросительным словом",
        table: [
          ["Вопрос", "Перевод"],
          ["What is your name?", "Как тебя зовут?"],
          ["Where are you from?", "Откуда ты?"],
          ["How are you?", "Как дела?"],
          ["Who is he?", "Кто он?"]
        ]
      },
      {
        h: "Ловушка",
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
    examples: [
      { en: "Are you a student?", ru: "Ты студент?" },
      { en: "Is she from Italy?", ru: "Она из Италии?" },
      { en: "Where are you from?", ru: "Откуда ты?" },
      { en: "What is your name?", ru: "Как тебя зовут?" }
    ],
    exercises: [
      { type: "translate", q: "Ты студент?", answers: ["are you a student"], explain: "Вопрос: are + you + a student." },
      { type: "translate", q: "Откуда ты?", answers: ["where are you from"], explain: "Where + are + you + from." },
      { type: "fill", q: "___ she from Italy?", answers: ["is"], explain: "she — is, и в вопросе is идёт первым." },
      { type: "choice", q: "Ответ на «Are you a teacher?» — если нет:", opts: ["No, I not.", "No, I'm not.", "No, I amn't."], answer: 1, explain: "Короткий отрицательный ответ: No, I'm not." },
      { type: "translate", q: "Как тебя зовут?", answers: ["what is your name", "what's your name"], explain: "Именно what, не how." },
      { type: "translate", q: "Как дела?", answers: ["how are you"], explain: "How are you? — стандартная фраза." },
      { type: "choice", q: "Где ошибка: «Where you are from?»", opts: ["Всё верно", "you и are надо поменять местами", "нужно do"], answer: 1, explain: "В вопросе глагол перед подлежащим: Where are you from?" }
    ]
  },
  {
    id: "u3",
    block: "b1",
    unit: 3,
    title: "I am doing",
    subtitle: "Делаю прямо сейчас",
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
      { w: "look", tr: "/lʊk/ (лук)", ru: "смотреть", ex: "I am looking at the photo.", exRu: "Я смотрю на фото." }
    ],
    examples: [
      { en: "I am reading a book.", ru: "Я читаю книгу." },
      { en: "She is not working today.", ru: "Она сегодня не работает." },
      { en: "They are eating lunch.", ru: "Они обедают." },
      { en: "Are you listening?", ru: "Ты слушаешь?" }
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
  {
    id: "u4",
    block: "b1",
    unit: 4,
    title: "Are you doing?",
    subtitle: "Вопросы про «сейчас»",
    theory: [
      {
        h: "Вопрос",
        p: "<b>Are you working?</b> — Ты работаешь (сейчас)? <b>Is she reading?</b> Глагол am/is/are идёт вперёд, -ing остаётся на месте."
      },
      {
        h: "Короткие ответы",
        p: "<b>Yes, I am.</b> / <b>No, I'm not.</b> <b>Yes, she is.</b> / <b>No, she isn't.</b> Опять: в конце короткого ответа сокращение не ставим."
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
    examples: [
      { en: "What are you doing?", ru: "Что ты делаешь?" },
      { en: "Is he working now?", ru: "Он сейчас работает?" },
      { en: "Where are they going?", ru: "Куда они идут?" },
      { en: "I'm not listening to music.", ru: "Я не слушаю музыку." }
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
   Взято из ключа с ответами в конце книги: юнит N -> упражнения N.1 … N.k.
   Если юнита нет в таблице — в уроке покажем только страницы. */
const EXCOUNT = {"1":6,"2":5,"3":4,"4":4,"5":5,"6":5,"7":4,"8":3,"9":5,"10":4,"11":5,"12":5,"13":4,"14":2,"15":2,"16":4,"17":4,"18":4,"19":5,"20":4,"21":4,"22":3,"23":5,"24":4,"25":4,"26":4,"27":5,"28":5,"29":4,"30":4,"31":5,"32":5,"33":6,"35":3,"37":2,"38":3,"39":5,"40":6,"41":4,"42":3,"43":5,"44":4,"45":3,"46":5,"47":5,"48":4,"49":6,"50":3,"51":3,"52":4,"53":3,"54":5,"55":3,"56":5,"57":3,"58":4,"59":5,"60":5,"61":4,"62":4,"63":4,"64":3,"65":4,"66":4,"67":3,"70":4,"71":3,"72":3,"73":2,"74":3,"75":3,"76":4,"77":4,"78":4,"79":4,"80":5,"81":3,"82":3,"83":5,"84":5,"85":4,"86":4,"87":4,"88":3,"89":4,"90":3,"91":4,"92":4,"93":3,"97":3,"98":4,"99":4,"100":4,"101":4,"102":4,"103":5,"104":2,"105":4,"106":2,"107":2,"108":5,"109":3,"110":3,"111":3,"112":5,"113":4,"114":3,"115":4};

const TEST_SIZE = 10;
