const form = document.querySelector(".js-form");
  input = form.querySelector("input");
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}


function askForName() {
  form.classList.add(SHOWING_CN)
  form.addEventListener("submit", handleSubmit)
}



function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  var daytime;
  const date = new Date();
  const hours = date.getHours()
  if( hours < 6){
    daytime = "Good Night"
  }
  else if( hours <  12) {
    daytime = "Good Morning"
  }
  else if(hours < 18) {
    daytime = "Good Afternoon"
  }
  else {
    daytime = "Good Evening"
  }
  console.log(hours);
  console.log(daytime);
  greeting.innerText = daytime + ", " + text + ".";
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null){
    askForName();
  }
  else { 
    paintGreeting(currentUser);
  }
}

// localstorage에대해서 배움


function init(){
  loadName()
}


init();