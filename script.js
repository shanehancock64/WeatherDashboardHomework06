let searchBtn = document.querySelector('.searchBtn')
let searchInfo = document.getElementById('searchInfo')
let dayOfWeek = document.getElementById('dayOfWeek')
let date = document.getElementById('date')
let location1 = document.getElementById('location1')
let degrees = document.getElementById('degrees')
let weatherType = document.getElementById('weatherType')
let windSpeed = document.getElementById('windSpeed')
let uv = document.getElementById('uv')
let humid = document.getElementById('humid')
// API KEY 
const APIkey = '7eeba36f0b72d40a8ac6bc40ea28ebfa';
// Getting LAT and LONG
function getApi() {
  var city = searchInfo.value.trim();
  const getGeoLocation = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + APIkey
  console.log(getGeoLocation);
  fetch(getGeoLocation)
    .then(function (response) {
      return response.json();
    })
    .then(function (data){
      console.log(data[0].lat) 
      console.log(data[0].lon)

      let latitude = data[0].lat
      let longitude = data[0].lon

      const getWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=alerts&units=imperial&appid=' + APIkey
    // Getting weather Data 

    fetch(getWeather)
    .then(function(response) {
      return response.json();
      })
      .then(function(data) {
        console.log(data);
        //console.log(data.current.weather[0].main);
        // Diplay real time temp
        degrees.innerHTML = data.current.temp + ' °F';
        // Display current sky conditions
        weatherType.innerHTML = data.current.weather[0].main;
        // Display % Humidity 
        humid.innerHTML = data.current.humidity + ' % Humidity';
        // Display wind speed
        windSpeed.innerHTML = data.current.wind_speed + ' MPH';
        // Display UV Index
        uv.innerHTML = data.current.uvi + ' UV Index';
        // Display Day 
        dayOfWeek.innerHTML = moment().format('dddd');
        // Display date and time
        date.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
      })
      
      
   })
  
    
   //$('#degrees').replaceWith(data.current.temp)
  
    
    
}
searchBtn.addEventListener('click', getApi);

// save search history 

