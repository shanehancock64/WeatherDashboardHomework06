let searchBtn = document.querySelector('.searchBtn')
let searchInfo = document.getElementById('searchInfo')
let dayOfWeek = document.getElementById('dayOfWeek')
let date = document.getElementById('date')
let location1 = document.getElementById('location1')
let degrees = document.getElementById('degrees')
let weatherType = document.getElementById('weatherType')
let windSpeed = document.getElementById('windSpeed')
let uv = document.getElementById('uv')
// API KEY 
const APIkey = '7eeba36f0b72d40a8ac6bc40ea28ebfa';
// search button 
searchBtn.addEventListener('click', function(){
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=" + searchInfo + "&limit=5&appid=" + APIkey')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

})
// 
