"use strict";

const btn = document.querySelector(".btn");
const questionBox = document.querySelector(".question-box");

const questions = [
  "HTML nima?",
  "CSS nimaga yordam beradi?",
  "JavaScript nima?",
  "React.js va Next.js nima?",
  "Hook nima?",
  "useState nima?",
  "useEffect nima?",
  "useContext nima?",
  "Pure function nima?",
  "Loop nima?",
  "Boolean nima?",
  "Symbol nima?",
  "Promise nima?",
  "Async/await funksiya",
  "This nima?",
  "Hoisting nima?",
  "Metod nima?",
  "use strict nimaga kerak?",
  "Asinxron funksiyalarga nimalar kiradi?",
  "Sinxron funksiyalarga nimalar kiradi?",
  "Math operatorlar",
  "Object va Arrayning orasidagi farq nima?",
  "NaN nima?",
  "DOM nima?",
  "BOM nima?",
  "localStorage nima vazifani bajaradi?",
  "Type Conversions nima?",
  "Mantiqiy operatorlar",
  "variables",
  "map nima vazifani bajaradi?",
  "Array metodlarini sanab bering?",
  "filter() nima vazifani bajaradi?",
  "find() nima vazifani bajaradi?",
  "find() va filter() ning farqi nima?",
  "nextjs haqida nima bilasiz",
  "TypeScript nima?",
  "TypeScriptda void",
  "Tailwind CSS haqida gapirib bering",
  "Tailwind CSS da yozilgan stil qanday stil deyiladi?",
  "Nega typescriptda yozilgan kod kompayl qilinishi kerak?",
  "useLocation nima?",
  "React va Vite orasidagi farq",
  "React query nima?",
  "Ant Design nima?",
  "clsx nima?",
  "switch case nima?",
  "useParams bilan useLocation farqi",
  "axios token nima?",
  "Reacharts nima?",
  "SCSS da yozilgan kod qaysi tilga compile bo'ladi?",
  "BEM nima?",
  "SASS nima?",
  "SASS va SCSS ning bir-biridan farqi nima?",
  "Vite necha mgb?",
  "swagger nima?",
  "refresh tokrn nima?",
  "Chart eng yaxshi kutubxonalar",
  "cookie fayl nima?",
  "particles js nima?",
  "bitta projectda 2 ta bir-xil vazifani bajaradigan kutubxona o'rnatish to'grimi?",
  "three js nima?",
  
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

btn.addEventListener("click", () => {
  const randomQuestion = getRandomQuestion();
  questionBox.innerHTML = `<h2>${randomQuestion}</h2>`;
});
