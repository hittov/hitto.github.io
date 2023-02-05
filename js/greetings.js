// HIDDEN_CLASSNAME 변수이름을 대문자로 하는 이유는 string만 포함된 변수는 대문자로 표기하고
// string을 저장하고 싶을 때 사용 - 관습 stirng을 반복적으로 사용하게 될 경우 오타 실수 줄이기
// "Hello " + username와 `Hello ${username}`은 똑같이 string과 변수를 합쳐줌
// `Hello ${username}`의 규칙은 stirng ${var} 형식으로 써야한다는 것과 `` 백틱을 사용해야 함
// localStorage는 브라우저가 제공하는 저장소 개념 API
// localStorage.setItem("key", "value") 저장하기
//       //    .getItem("key") 불러오기       //   .removeItem("key") 지우기
// 반복되는 일에는 함수 선언으로 코드를 줄이자
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello!! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
