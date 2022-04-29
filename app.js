let long;
let lat;

const apiKey = "4d61cf0824a05bc7526fb1790bd9e842";

async function getLocationWeatherData(lat, long) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

  const response = await fetch(URL, { mode: "cors" });
  const data = await response.json();
  console.log(data);
}

getLocationWeatherData(7.3775, 3.947);
