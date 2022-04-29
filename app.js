let long;
let lat;

const apiKey = "4d61cf0824a05bc7526fb1790bd9e842";

const getLocationWeatherData = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(URL, { mode: "cors" })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  }
};

getLocationWeatherData();
