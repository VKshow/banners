window.addEventListener('load',function() {


  //nike ad
let nikeBkgTwo = document.querySelector('.nike__back-two');
let nikeImg = document.querySelector('.shoes_img');

const colors = ['orange', 'rgb(111, 7, 38)', 'rgba(3, 3, 154, 0.842)', 'rgb(175, 18, 18)'];
const images = ['img/nike/shoes1.png', 'img/nike/shoes2.png', 'img/nike/shoes3.png', 'img/nike/shoes4.png'];
let currentIndex = 0;

function changeColorAndImage() {
  nikeBkgTwo.style.backgroundColor = colors[currentIndex];
  nikeImg.src = images[currentIndex];

  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColorAndImage, 1000);




});