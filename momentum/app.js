"use strict";
// console.log("!!!");
// const unsplashKey =
//   "730f7c832c170262f935a08f22e6ee21b71cbb47e42198e6def52a5bffbf170f";
// const bg = document.querySelector(".bg");

// axios({
//   method: "GET",
//   url: `https://api.unsplash.com/photos/random?client_id=${unsplashKey}`
// })
//   .then(response => {
//     const bgImage = response.data.urls.regular;

//     bg.style.backgroundImage = `url(${bgImage})`;
//   })
//   .catch(error => {
//     console.log(error);
//   });
const cityName = document.querySelector("#city");
const weather = document.querySelector("#degree");
const icons = {
  clear: "☀",
  rain: "️🌧",
  storm: "⛈",
  snow: "🌨",
  mist: "🌫",
  clouds: "☁"
};

const weatherKey = "0e869ebeacf23920b59f068d1dd98f39";
const cityUrl = "Riyadh";

axios({
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/weather?q=${cityUrl}&APPID=${weatherKey}`
})
  .then(response => {
    const temp = response.data.main.temp - 273.15;
    const city = response.data.name;
    const weatherKey = "" + response.data.weather[0].main.toLowerCase();
    cityName.innerText = city;
    weather.innerHTML = `${icons[weatherKey]}  ${temp}&deg; C`;
  })
  .catch(error => {
    console.log(error);
  });

const time = document.querySelector("#time h1");

time.innerText = moment().format("LT");
setInterval(() => {
  time.innerText = moment().format("LT");
}, 600000);

const salutation = document.querySelector("#time h3");
const userName = "Hazim Alblowi";
let salute = "";
const saluteTime = parseInt(
  moment()
    .format("H:mm")
    .replace(":", "")
);
if (saluteTime >= 500 && saluteTime < 1200) {
  salute = "Good Morning";
} else if (saluteTime >= 1200 && saluteTime < 1800) {
  salute = "Good Afternoon";
} else {
  salute = "Good Evening";
}
salutation.innerText = `${salute}, ${userName}`;

const quote = document.querySelector("#quote h3");
const author = document.querySelector("#quote h4");

const quoteParameters = "method=getQuote&format=json&lang=en";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
axios({
  method: "GET",
  url: `${corsAnywhere}http://api.forismatic.com/api/1.0/?${quoteParameters}`
})
  .then(response => {
    console.log(response);
    const quoteText = response.data.quoteText;
    const authorName = response.data.quoteAuthor;
    quote.innerText = '"' + quoteText + '"';
    author.innerText = "—" + authorName;
  })
  .catch(error => {
    console.log(error);
  });
