const rgbCode = document.getElementById("rgb-container");
const score = document.getElementById("score-container");
const options = document.getElementById("options-container");
let randomColor = null;
let counter = document.getElementById("scoreCount");
let currentScore = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  currentScore += 1;
  counter.innerText = currentScore;
}

function validateResult(el) {
  selectedColor = el.target.style.backgroundColor;

  if (selectedColor === randomColor) {
    incrementScore();
  } else {
    currentScore = 0;
    counter.innerText = currentScore;
  }

  window.localStorage.setItem("score", currentScore);

  startGame();
}

function startGame() {
  currentScore = Number(window.localStorage.getItem("score")) ?? 0;
  counter.innerText = currentScore;
  randomColor = generateRandomColor();
  rgbCode.innerText = randomColor;

  options.innerHTML = "";

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColor();
    options.append(div);
  }
}

window.addEventListener("load", () => startGame());
