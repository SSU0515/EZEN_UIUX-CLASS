//버튼과 nav를 불러온다
//버튼 클릭 이벤트시 nav가 옆으로 튀어나온다

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
