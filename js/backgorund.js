const images = ["Seoul.jpg", "Paris.jpg", "Greece.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement() -> html 요소 생성
const bgImage = document.createElement("img");

// src 속성에 이미지 경로 추가
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

// appendChild() -> body에 html 요소 추가
document.body.appendChild(bgImage);
