const backgroundColor = document.getElementById("color-code");
const redCode = document.getElementById("code-red");
const greenCode = document.getElementById("code-green");
const blueCode = document.getElementById("code-blue");
const generateColor = document.getElementById("generate-color");

function backgroundColorChange() {
  const red = redCode.value;
  const green = greenCode.value;
  const blue = blueCode.value;

  backgroundColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  const color = window.getComputedStyle(backgroundColor).backgroundColor;
  console.log(color);
}
generateColor.addEventListener("click", backgroundColorChange);
