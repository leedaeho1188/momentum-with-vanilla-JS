const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}



function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}


function init () {
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();

// Math.floor은 소수점 숫자들을 버리고 숫자를 정수로 만든다.
// Math.random은  0부터 1사이에 숫자들을 랜덤으로 나타낸다.