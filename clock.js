const clockContainer = document.querySelector(".js-clock");
clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = (hours < 10 ? '0' + hours : hours) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
}
// ? means 'then' : means 'else' 

function init(){
  getTime();
  setInterval(getTime, 1000);
}
// setInterval에서 ( ,tiemout )인데 timeout은 기본값이 miliseconds여서 1000이 1seconds이다. 
init();


