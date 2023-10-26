"use strict";

const btn = document.querySelector(".btn");
const questionBox = document.querySelector(".question-box");

const questions = [
  "HTML nima?",
  "CSS nimaga yordam beradi?",
  "HTMLda selectors nima?",
  "meta teglar nima",
  "HTMLda content atributi nima vazifani bajaradi?",
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
  "access token nima?",
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
  "validation nima?",
  "ninja code nima?",
  "garbage collection nima?",
  "github nima uchun kerak?",
  "gitlab nima?",
  "regex nima?",
  "regex haqida gapirib bering?",
  "regex so'zining uzaytmasi",
  "useMemo nima?",
  "useRef nima?",
  "useReducer nima?",
  "reduce() nima?",
  "postman nima?",
  "request turlariga nimalar kiradi?",
  "nechta request turi mavjud?",
  "GET nima?",
  "POST nima?",
  "PUT nima?",
  "PATCH nima?",
  "DELETE nima?",
  "refresh token nima",
  "barer token nima?",
  "axios va react queryning nima farqi bor?",
  "TypeScriptdagi any tipi nima?",
  "confilict nima?",
  "!! ushbu belgi nima vazifa bajaradi?",
  "?? ushbu belgi nima vazifa bajaradi?",
  "&& ushbu belgi nima vazifa bajaradi?",
  "|| ushbu belgi nima vazifa bajaradi?",
  "? ushbu belgi nima vazifa bajaradi?",
  "! ushbu belgi nima vazifa bajaradi?",
  "then nima?",
  "vue js haqida nima bilasiz?",
  "kutubxona va frameworkning farqi nimada?",
  "kutubxona nima?",
  "framework nima?",
  "mobile dasturlash haqida nimalarni bilasiz?",
  "react native nima?",
  "expo nima?",
  "angular haqida gapirib bering?",
  "vue js haqida nima bilasiz?",
  "svelte haqida nima bilasiz?",
  "eng tez javascript frameworki qaysi?",
  "javascriptni qachon va kim ishlab chiqqan?",
  "clipboard nima?",
  "bootstrap nima?",
  "string metodlarini sanab bering?",
  "number metodlarini sanab bering?",
  "array metodlarini sanab bering?",
  "object metodlarini sanab bering?",
  "testing nima?",
  "jest nima?",
  "react testing library nima?",
  "json metodlarini sanab bering?",
  "javascriptda iterables nima?",
  "javascriptda call nima?",
  "javascriptda apply nima?",
  "git flow nima?",
  "scrum nima?",
  "solid prinsplar nima?",
  "mikro tasklar nima?",
  "reference type nima?",
  "commetns haqida gapirib bering?",
  "error handling nima?",
  "javascriptda generators nima?",
  "makro tasklar nima?",
  "dynamic imports nima?",
  "OPI nima?",
  "SEO nima?",
  "google analistika nima?",
];

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

btn.addEventListener("click", () => {
  const randomQuestion = getRandomQuestion();
  questionBox.innerHTML = `<h2>${randomQuestion}</h2>`;
});
