const workSpace = document.getElementById("input-area");
const resultSpace = document.getElementById("result-area");

function getValue(el) {
  console.log(el.innerText);
  workSpace.value += el.innerText;
}

function calculate() {
  resultSpace.value = eval(workSpace.value);
}

function reset() {
  workSpace.value = "";
  resultSpace.value = "";
}
