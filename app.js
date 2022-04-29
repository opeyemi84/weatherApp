const apiKey = "4d61cf0824a05bc7526fb1790bd9e842";

async function getLocationWeatherData(location) {
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=4d61cf0824a05bc7526fb1790bd9e842";

  const response = await fetch(URL, { mode: "cors" });
  const data = await response.json();
  console.log(data);
  const { name } = data;
  const { feels_like, humidity, temp } = data.main;
  const { country } = data.sys;
  const { main, description } = data.weather[0];
  console.log(description);
}

getLocationWeatherData("Lagos");
