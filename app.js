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
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

btn.addEventListener("click", () => {
  const randomQuestion = getRandomQuestion();
  questionBox.innerHTML = `<h2>${randomQuestion}</h2>`;
});
