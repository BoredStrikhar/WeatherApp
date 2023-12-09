function sendRequest() {
  const search = document.getElementById("search");
  const city = search.value;
  const APIkey = "5e50b334165fc490d52528ffef2187e5";
  console.log(city);
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`
  )
    .then((data) => data.json())
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      console.log(lat);
      console.log(lon);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}
        `
      )
        .then((data) => data.json())
        .then((data) => {
          let temperature = document.getElementById("temperature");
          temperature.innerText = Math.floor(data.main.temp - 273.15);
          let weather = document.getElementById("weather");
          weather.style.display = "flex";
        });
    });
}
