//마우스의 움직임에 따라서 좌표값이 변경되고 있다는 사실을 확인해야한다!!
//window 객체안에 포함되어있는 이벤트

//clientX : 스크롤 인식 못하고 단순히 웹브라우저상의 마우스의 위치값을 반환
//pageX
//=>웹페이지를 스크롤하게 되면 값이 바뀜
//만약 스크롤이 발생될수 밖에 없는 페이지 안에서 스크롤이 내려가는 상황에서도
//나의 x,y좌표값을 찾아오고 싶다면 반드시 pageX를 사용핳
//screenX
const cursorItem = document.querySelector(".cursoritem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.5;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.5)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
});

loop();
