const button = document.getElementById("getLocBtn");

const city = document.getElementById("location");
const time = document.getElementById("time");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=766ca153d625467da4e114516250806&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  time.innerText = result.location.localtime;
  temp.innerText = result.current.temp_c;
  weather.innerText = result.current.condition.text;
  console.log(result);
}

function notGotLoc() {
  console.log("Unable to get User Location.");
}

button.addEventListener("click", async () => {
  const location = navigator.geolocation.getCurrentPosition(
    gotLocation,
    notGotLoc
  );
});

// button.addEventListener("click", async () => {
//   const value = input.value;
//   const result = await getData(value);
//   city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
//   time.innerText = result.location.localtime;
//   temp.innerText = result.current.temp_c;
//   weather.innerText = result.current.condition.text;
// });
