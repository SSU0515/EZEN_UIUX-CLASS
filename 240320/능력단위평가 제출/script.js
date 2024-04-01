const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const slideWidth = 100;
const controls = document.querySelectorAll("span");

console.log(slide, slides);

controls.forEach((move) => {
  move.addEventListener("click", () => {
    moveSlide(move);
    console.log(move);
  });
});

const moveSlide = (move) => {
  slide.forEach((e) => {
    if (move.id === "first") {
      e.style.transform = "translate(0)";
    } else if (move.id == "second") {
      e.style.transform = `translate(${-slideWidth}%)`;
    } else {
      e.style.transform = `translate(${-slideWidth * 2}%)`;
    }
  });
};
