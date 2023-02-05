
const images = [ "img1.jpg", "img2.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;

body.style.backgroundImage = `url("img/${chosenImage}")`;


/* 이미지 태그 추가
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";
 */