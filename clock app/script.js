const time = document.getElementById("time");
const stopTime = document.getElementById("stop");

async function showTime() {
  const currentTime = new Date();
  time.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}

let interval = setInterval(showTime, 1000);

stopTime.addEventListener("click", () => {
  clearInterval(interval);
});
