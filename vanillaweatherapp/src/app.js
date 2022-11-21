function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#sky");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
}

let apiKey = "1ft66b38222ac020b260o674ba337ff5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={New York City}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
