console.log("loaded")
console.log(moment().format('LTS'))

const $backgroundImageDiv = $('.background');

// GRAB RANDOM IMAGE FROM UNSPLASH
axios({
    method: 'GET',
    url: 'https://api.unsplash.com/photos/random/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887'
  })
  .then(response => {
    $backgroundImageDiv.css('background-image', `url(${response.data.urls.regular})`);
  })
  .catch(error => {
    console.log(error)
  })

// GET WEATHER
axios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=3f09349479850459fbb04e503859d422'
  })
  .then(response => {
    const celius = response.data.main.temp - 273.15
    console.log(celius)
  })
  .catch(error => {
    console.log(error);
  })

// GET RANDOM QUOTE
axios({
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })



// function getRandomImage() {
//   return axios({
//     method: 'GET',
//     url: 'https://api.unsplash.com/photos/random/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887'
//   })
// }

// function getWeather() {
//   return axios({
//     method: 'GET',
//     url: 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=3f09349479850459fbb04e503859d422'
//   })
// }

// axios.all([getRandomImage(), getWeather()])
//   .then(axios.spread(function (acct, perms) {
//     console.log(acct)
//     console.log(perms)
//   }));