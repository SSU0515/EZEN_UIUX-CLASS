const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

let speed = 0.03;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x : ${x} y:${y}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";

  window.requestAnimationFrame(loop);
};

loop();
