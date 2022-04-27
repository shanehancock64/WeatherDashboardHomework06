let searchBtn = document.querySelector('.searchBtn')
let searchInfo = document.getElementById('searchInfo')
let dayOfWeek = document.getElementById('dayOfWeek')
let date = document.getElementById('date')
let location1 = document.getElementById('location1')
let degrees = document.getElementById('degrees')
let weatherType = document.getElementById('weatherType')
let weatherIcon = document.getElementById('icon')
let windSpeed = document.getElementById('windSpeed')
let uv = document.getElementById('uv')
let humid = document.getElementById('humid')
let day1 = document.getElementById('day-1')
let day2 = document.getElementById('day-2')
let day3 = document.getElementById('day-3')
let day4 = document.getElementById('day-4')
let day5 = document.getElementById('day-5')
let day6 = document.getElementById('day-6')
let day7 = document.getElementById('day-7')

// API KEY 
const APIkey = '7eeba36f0b72d40a8ac6bc40ea28ebfa';
// Getting LAT and LONG
function getApi() {
  var city = searchInfo.value.trim();
  const getGeoLocation = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + APIkey
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
        //icon 
        var iconCode = data.current.weather[0].icon; 
        weatherIcon.src="https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        //weatherIcon.innerHTML.src = "http://openweathermap.org/img/wn/"+ data.current.weather[0].icon +"@2x.png";
        // Display % Humidity 
        humid.innerHTML = data.current.humidity + ' % Humidity';
        // Display wind speed
        windSpeed.innerHTML = data.current.wind_speed + ' MPH Wind';
        // Display UV Index
        uv.innerHTML = data.current.uvi + ' UV Index';
        // Display Day 
        dayOfWeek.innerHTML = moment().format('dddd');
        // Display date and time
        date.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
        // 7 day forecast 
         day1.innerHTML = data.daily[1].temp.day
         day2.innerHTML = data.daily[2].temp.day
         day3.innerHTML = data.daily[3].temp.day
         day4.innerHTML = data.daily[4].temp.day
         day5.innerHTML = data.daily[5].temp.day
         day6.innerHTML = data.daily[6].temp.day
         day7.innerHTML = data.daily[7].temp.day
         

         console.log(iconCode);
          
      
      })
      
      
      
      
      
      
   })
  
    
   
  
    
    
}
searchBtn.addEventListener('click', getApi);

// save search history 

