var inputValue = document.querySelector("#cityInput");
var btn = document.querySelector("#add");
var city = document.querySelector("#city");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apiKey = "c9aae54b128208d6b8294eb3d53359f2";

function convertInCelcius(val) {
  // this function will convert the temperature from Fahrenheit to Celcius.
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=" +
      apiKey
    //API call
  )
    .then((res) => res.json())
    .then((data) => {
      // fetch the data
      var nameVal = data["name"];
      var decp = data["weather"]["0"]["description"];
      var temperature = data["main"]["temp"];
      var windSpeed = data["wind"]["speed"];

      // Display the data called using DOM
      city.innerHTML = `Weather ⛅ of <span>${nameVal} </span>`;
      temp.innerHTML = `Temperature: <span>${convertInCelcius(
        temperature
      )} &deg C</span>`;
      description.innerHTML = `Sky Conditions: <span>${decp}</span> `;
      wind.innerHTML = `Wind Speed: <span>${windSpeed} meter/sec </span>`;
    })
    .catch((err) => {
      alert("OOps! something went wrong😵");
      console.log(err);
    });
});
