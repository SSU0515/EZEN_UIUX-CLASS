//click 버튼을 누르면 modal이 튀어 나온다
//close를 누르면 modal이 닫히고 click 버튼이 나온다

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

const openFnc = () => {
  openButton.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  container.style.display = "none";
  closeButton.style.display = "block";
};

openButton.onclick = openFnc;
closeButton.onclick = closeFnc;
