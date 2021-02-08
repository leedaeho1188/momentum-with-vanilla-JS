console.log('I am working. im js. Im Beautiful. Im worth it');

var a = 221;
var b = 100;
a = 20;
console.log(b,a);

// 'let' can be changed but 'const' cant be changed

let name = 'brad lee'
// console.log(name) = brad lee


// console.log(name) = daeho lee

// 'var'은 변수 재선언이 되지만 'let' or 'const'는 변수 재선언이 되지 않는다.

const what = "brad lee"
// what = "brad lee"

console.log(what);

const wat = true;
// true = 0, false = 1  boolean

// dayOfWeek 단어 사이에 스페이스가 들어가면 대문자로 표시한다.

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(mon, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"]
console.log(daysOfWeek);
console.log(daysOfWeek[0]);

// -----------array-------//

const aboutMe = {
  name : "Brad", 
  age : 29, 
  hobby : "basketball",
  favMovies: ["Midnight in Paris", "Old boy", "Avengers"],
  favFood: [
    {
      name: "ramen",
      healthy: false
    },
    {
      name: "kimchi ggigae",
      
      healthy: true
    }
  ]
}

console.log(aboutMe.age);

aboutMe.hobby = "soccer";

console.log(aboutMe.hobby);

console.log(aboutMe.favMovies[1]);

console.log(aboutMe.favFood[0].healthy);

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// ----------- object- ---------------//


// #2 practice ------//
console.log(console);
// console is object, log is function
function sayHello(name, age) {
  console.log('Hello! ' +  name + " you are " + age + " years old" );
}
   
sayHello("Brad", 15);

function sayHi(name, age) {
  return `Hello! ${name} you are ${age} years old`;
}

const greetDaeho = sayHi("Brad", 29)

console.log(greetDaeho)
// ----------
const calculator = {
 plus: function(a, b){
  return a+b; //you can use a**b, a/b, a*b, a%b, a+b
 } 
}
const plus = calculator.plus(5, 2)
console.log(plus)
// ---------------------------------------------------------------

console.log(document);
// document는 html을 뜻한다.

const title = document.getElementById("title");

console.log(title);

console.error("error")

title.innerHTML = "Hi From JS"
// title is DOM

console.dir(title);
// dir is function that shows all the information about DOM which helps to modify html

const title_title1 = document.querySelector(".title_title1");

console.log(title_title1);


console.dir(title_title1);

// ----------------------- event------------------//


function handleClick(){
  if(title.style.color == "red"){
    title.style.color = "black";
    console.log(title.style.color);
  }
  else{
    title.style.color = "red";
    console.log(title.style.color);
  }
}

title.addEventListener("click", handleClick)
// flat color 에서 색을 가져올 수 있다. 



// const BASE_COLOR = "white";
// const OTHER_COLOR = "blue";

const MOUSEOVER = "mouseOver";

function mouseOver(){
  // title_title1.classList.toggle(MOUSEOVER);
  const currentClass = title_title1.className;
  if(title_title1.className.indexOf(MOUSEOVER) == -1){
  title_title1.className = title_title1.className + MOUSEOVER;
  }
  else{
    title_title1.className = title_title1.className.replace(MOUSEOVER, " ");
  }
}

// if you use 'toggle' you can make code simpler




// const currentColor = title_title1.style.color;
//   if(currentColor == BASE_COLOR) {
//     title_title1.style.color = OTHER_COLOR;
//   }
//   else {
//     title_title1.style.color = BASE_COLOR;
//   }


function init(){
  // title_title1.style.color = BASE_COLOR;
  title_title1.addEventListener("mouseenter", mouseOver);
}

init();

//  javascript event를 검색할 때는 MDN을 사용하시요.


// if,else에서는 and를 &&로 or을 ||로 표시한다.

const age = prompt("How old are you?")

if(age >= 18 && age <= 21){
  console.log("you can enter but you should not enter");
}
else if (age > 21){
  console.log("welcome~")
}
else{
  console.log("you can't enter")
}













// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }