function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let pressureElement = document.querySelector("#pressure");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#sky");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = response.data.temperature.humidity;
  pressureElement.innerHTML = response.data.temperature.pressure;
  windElement.innerHTML = response.data.wind.speed;
  descriptionElement.innerHTML = Math.round(
    response.data.condition.description
  );
  dateElement.innerHTML = formatDate(response.time * 1000);
  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

let apiKey = "1ft66b38222ac020b260o674ba337ff5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={New York City}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
