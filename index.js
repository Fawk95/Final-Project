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
