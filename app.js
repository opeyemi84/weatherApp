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
      "&appid=4d61cf0824a05bc7526fb1790bd9e842&units=metric";

    const response = await fetch(URL, { mode: "cors" });
    const data = await response.json();
    if (data.cod != 200) throw data.message;
    // console.log(data);
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
  } catch (e) {
    Swal.fire({
      title: "Error!",
      text: e,
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
}

getLocationWeatherData("Ijebu-Ode");

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
  weatherDesc.textContent = description.toUpperCase();
  feelsLike.textContent = "Feels like: " + Math.round(feels_like) + "℃";
  humid.textContent = "Humidity: " + humidity + "%";
  temperature.textContent = "Temperature: " + Math.round(temp.toFixed(2)) + "℃";
  maxTemp.textContent = "High: " + Math.round(temp_max) + "℃";
};

submit.addEventListener("click", () => {
  getLocationWeatherData(input.value);
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

input.addEventListener("click", () => {
  input.value = "";
});
