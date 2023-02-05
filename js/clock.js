// interval '매번' 일어나야 하는 무언가를 뜻함 ex) 매 2초마다
const clock = document.querySelector("h2#clock");

// padStart(); 함수 stirng의 길이를 정하고 2 해당 string이 2보다 적으면 앞에 0을 붙여줌
// padEnd(); 뒤에 0을 붙여줌
function getClock() {
  const date = new Date(); // 현재 날짜와 시간 함수를 불러옴
  const hours = String(date.getHours()).padStart(2, "0"); // String(number) number를 string으로 변환
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval은 두개의 argument를 받음 첫번째는 실행하고자 하는 function
// 두번째는 호출되는 function 간격을 몇 ms(milliseconds)로 할 지 씀
// setInterval(sayHello, 5000); 매 5초마다 함수를 실행

// setTImeout은 5초에 함수를 실행 (한 번만)
// setTimeout(getClock, 1000);
getClock(); // 현재 시간을 바로 보여주고
setInterval(getClock, 1000); // 1초마다 시간을 보여줌
