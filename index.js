function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchText = input.value;

  window.location.href =
    "/search-results?query=" + encodeURIComponent(searchText);
});

function showUser(response) {
  alert(response);
}

let link = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);
function showUser(response) {
  alert(JSON.stringify(response.data));
}
function showUser(response) {
  alert(JSON.stringify(response.data));
}

let url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then(showUser);

function searchCity(city) {
  let forecast = document.querySelector("#forecast");
  let apiKey = "ebfa973675011tfoc4a6499daf9c3c06";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key={key}`;
  axios.get(apiUrl).then(refreshWeather);
}
forecast.innerhtml = `
  <div class="weather-forecast-day">
    <div class="weather-forecast-date">Tues</div>
    <div class="weather-forcast-icon"></div>
    <div class="weather-forecast-temperature">
      <div class="weather-forecast-temperature">
        <strong>32</strong>
      </div>
      <div class="weather-forcast-temperature">28</div>
    </div>
  </div>
`;
getForecast(response.data.city);

function getForecast(city) {
  let apiKey = "ebfa973675011tfoc4a6499daf9c3c06";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key={key}`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
}
searchCity("Perth");
