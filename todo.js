const toDoForm = document.querySelector(".js-toDoForm");
  toDoInput = toDoForm.querySelector("input");
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];




function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function showButton() {
  toDoList.addEventListener("mouseover", btnOver)
  toDoList.addEventListener("mouseout", btnOut)
}
function btnOver() {
  // delBtnTodo.classList.remove("greeting")
}
function btnOut(){
  // delBtnTodo.classList.add("greeting")
}


function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}
//local storage는 javascript에 string 버전만 저장할 수 있다. 
//JSON.stringify는 objec를 string화 시킨다.


function paintToDo(text){
  const span = document.createElement("span");
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = '❌';
  delBtn.addEventListener("click", deleteToDo);
  delBtn.classList.add("delBtn_todo")
  span.innerText = text;
  let checkBox = document.createElement("input");
  checkBox.classList.add("checkbox")
  checkBox.setAttribute("type", "checkbox");
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
  showButton();
}




function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}





function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS)
  if (loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text)
    });
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();