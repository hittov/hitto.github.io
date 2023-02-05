// img 이름이랑 js에서 이름을 같게

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement js에서 html에 tag를 만드는 것
const bgImage = document.createElement("img");

// js에서 tag property 추가
bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage.src})`;
// appenChild js에서 만든 태그를 html body에 태그 추가
// appen 가장 뒤 prepend는 가장 위
