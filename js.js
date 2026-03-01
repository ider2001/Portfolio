const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  document.body.classList.toggle("menu-open");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// const knap = document.querySelector("button");

// knap.addEventListener("click", readMoreBtn);
// function readMoreBtn () {

// }

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".right");
const prevButton = document.querySelector(".left");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
