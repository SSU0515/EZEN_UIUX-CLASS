//const sliderWrapper = document.querySelector(".container");
//const sliderContainer = document.querySelector(".slider-container");
//const slides = document.querySelector(".slide");
//
//const navPrev = document.querySelector("#prev");
//const navNext = document.querySelector("#next");
//
////slide count
//const slideCount = slides.length;
//for (let i = 0; i < slideCount; i++) {
//  slides[i].style.left = `${i * 100}%`;
//}
//
////slide height
//let topHeight = 0;
//
//const calculateTallestSlide = () => {
//  for (let i = 0; i < slideCount; i++) {
//    if (slides[i].offsetHeight > topHeight) {
//      topHeight = slides[i].offsetHeight;
//    }
//  }
//  sliderWrapper.style.height = `${topHeight}px`;
//  sliderContainer.style.height = `${topHeight}px`;
//};
//
//calculateTallestSlide();
//
//let currentIndex = 0;
//
//navNext.addEventListener("click", (e) => {
//  e.preventDefault();
//  console.log("click");
//});
//
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// slide count
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

// slide height
let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }

  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;

const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
};

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});
