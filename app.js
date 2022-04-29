const cityName = document.querySelector(".city");
const weatherDesc = document.querySelector(".weatherDesc");
const temperature = document.querySelector(".temp");
const maxTemp = document.querySelector(".tempMax");
const feelsLike = document.querySelector(".feelsLike");
const humid = document.querySelector(".humidty");
const deg = document.querySelector(".deg");
const input = document.querySelector(".searchBar");
const submit = document.querySelector(".add");
const slider = document.querySelector(".toggleF");
const img = document.querySelector(".weatherImage");
const body = document.querySelector("body");
const count = document.querySelector(".country");

async function getLocationWeatherData(location) {
  try {
    const URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&appid=4d61cf0824a05bc7526fb1790bd9e842";

    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    const { name } = data;
    const { feels_like, humidity, temp, temp_max } = data.main;
    const { country } = data.sys;
    const { description, icon } = data.weather[0];
    loadWeatherData(
      name,
      country,
      description,
      feels_like,
      humidity,
      temp,
      temp_max
    );
  } catch (message) {
    console.log(message);
  }
}

getLocationWeatherData("Lagos");

const loadWeatherData = (
  name,
  country,
  description,
  feels_like,
  humidity,
  temp,
  temp_max
) => {
  cityName.textContent = name;
  count.textContent = country;
  weatherDesc.textContent = description;
  feelsLike.textContent = "Feels like: " + feels_like;
  humid.textContent = "Humidity: " + humidity + "%";
  temperature.textContent = "Temperature: " + temp;
  maxTemp.textContent = "High: " + temp_max;
};
