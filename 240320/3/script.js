const imageAll = document.querySelectorAll(".imgWrap .parallaxImage");
const subPageImage = document.querySelector(".subPage .parallaxImage");

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${-scrollNum / (5 * index)}px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;

  //음수값을 줘서 정반대로
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.2) translate(${-targetX / 30}px,
  ${-scrollNum / (5 * (index - 4))}px)`;
  imageAll[5].style.transform = `scale(1.2) translate(${-targetX / 20}px,${
    -scrollNum / 2
  },${-scrollNum / (5 * (index - 4))}px)`;

  window.requestAnimationFrame(loop);
};
loop();
