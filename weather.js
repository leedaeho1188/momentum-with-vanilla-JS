const WEATHER = document.querySelector(".js-weather")


const API_KEY = "bb8d21b270ff93a1881fcff63c062575";
const COORDS = 'coords';


function getWeather(lat, log){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      const temperature = Math.round(json.main.temp);
      const feels_like = Math.round(json.main.feels_like);
      const place = json.name;
      WEATHER.innerText = `${temperature} @ ${feels_like} @ ${place}`;
    })
  // then을 쓰는 이유는 api로 가져오는 data가 오는걸 기다려야 하기 때문에.
}
// API주소에 https://를 붙여줘야 된다.


function saveCoords(coordsObject) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}


function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObject = {
    latitude, //latitude : latitude를 짧게쓰면 저렇게
    longitude 
  };
  saveCoords(coordsObject);
  getWeather(latitude, longitude);
}


function handleGeoError(){
  console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function localCoords(){
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null){
    askForCoords();
  }
  else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}


function init() {
  localCoords();
}

init();
