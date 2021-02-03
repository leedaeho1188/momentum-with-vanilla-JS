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

// const what = "brad lee"
// what = "brad lee"

// console.log(what);

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

// ----------- object- ---------------//





