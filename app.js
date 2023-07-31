"use strict";

const btn = document.querySelector(".btn");
const questionBox = document.querySelector(".question-box");

const questions = [
  "HTML nima?",
  "CSS nimaga yordam beradi?",
  "JavaScript nima?",
  "React.js va Next.js nima?",
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

btn.addEventListener("click", () => {
  const randomQuestion = getRandomQuestion();
  questionBox.innerHTML = `<h2>${randomQuestion}</h2>`;
});
