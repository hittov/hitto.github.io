const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

// JSON.stringify 어떠한 js 코드건 간에 string으로 바꿔줌
// JSON.parse string을 이해 할수 있는 array로 바꿔줌
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// target Html의 Element
// parentElement 누가 부모인지 어디서 button이 눌렸는지 알수 있음
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  // append()는 문자열 추가 가능 appendChild()는 객체만 추가 가능
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach는 item이라는 argument를 보내고 array의 각 item마다 function을 실행하게 해줌
  // forEach(function());과 forEach((item) => ); 은 같은 기능 후자는 function의 수를 줄일 수 있다 shortcut
  // => : arrow function 화살표 함수
  parsedToDos.forEach(paintTodo);
}

// array.filter(function) array를 함수의 true, false 판단 후 새 array를 만듬 선택옵션
// function filterFunction(var) {return var !== 조건} 조건이 true이면 유지하고 false면 제외
// ex) const arr = [1, 2, 4 ,5] arr.filter(item => item > 2) = [3, 4] shotcut 함수
