// const slides = document.querySelector(".slides");
// const slide = document.querySelectorAll(".slide");
// const slideWidth = 100;
// const controls = document.querySelectorAll("span");

// console.log(slide, slides);

// controls.forEach((move) => {
//   move.addEventListener("click", () => {
//     moveSlide(move);
//     console.log(move);
//   });
// });

// const moveSlide = (move) => {
//   slide.forEach((e) => {
//     if (move.id === "first") {
//       e.style.transform = "translate(0)";
//     } else if (move.id == "second") {
//       e.style.transform = `translate(${-slideWidth}%)`;
//     } else {
//       e.style.transform = `translate(${-slideWidth * 2}%)`;
//     }
//   });
// };

const buttons = document.querySelectorAll("label");
const tabItems = document.querySelector(".tabs .items");
const h1 = tabItems.querySelectorAll("h1");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabItems.style.left = `-${index * 100}%`;

    h1.forEach((title) => title.classList.remove("active"));
    h1[index].classList.add("active");
  });
});
