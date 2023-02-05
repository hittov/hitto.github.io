// latitude 위도 longitude 경도
// user의 위치를 알려주는 코드
const API_KEY = "cc6b237c830dd45b5ba9ac6088333f3d";

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}°C`;
    });
}
// fetch 직접 url 갈 필요 없이 JavaScript가 url를 불러줌
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// JavaScript는 그냥 함수를 실행 한 것보다 더 많은 정보를 준다.
// navigator.geolocation.getCurrentPosition(성공 함수, 에러 함수)
// https://openweathermap.org/ 날씨 api 주소 api는 다른 서버와 이야기할 수 있는 방법
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
