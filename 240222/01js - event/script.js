//window.onload = alert("안녕하세요");

//마우스 이벤트=> click

//const body = document.querySelector("body");
//const button = document.querySelector("button");

//const btnFnc = () => {
//  window.document.body.style.backgroundColor = "#333";
//};

//button.onclick = btnFnc;

//키보드 이벤트

//const result = document.querySelector("#result");
//
//document.body.onkeydown = (event) => {
//  result.innerText = `
//  code : ${event.code},
//  key : ${event.key}`;
//};

//event.key

//이벤트 헨들러

//const button = document.querySelector("button");
//
//button.onclick = () => {
//  document.body.style.backgroundColor = "pink";
//};

//이벤트 리스너 - 무지무지하게 훨씬 사용을 많이한다!!

//button.addEventListener("click", () => {
//  document.body.style.backgroundColor = "pink";
//});

//const form = document.querySelector("form");
//
//const button = document.querySelector("input[type='submit']");
//
//button.addEventListener("click", (e) => {
//  e.preventDefault();
//  const word = document.querySelector("input[type='text']").value;
//  const result = document.querySelector(".result");
//
//  const count = word.length;
//  result.innerText = count;
//
//  if (count >= 10) {
//  } else {
//    alert("아이디는 10자 이상이여야 합니다");
//  }
//});

//const box = document.querySelector("#box");
//box.addEventListener("click", (e) => {
//  alert(`이벤트 발생 위치 : ${e.pageX},${e.pageY}`);
//});

document.body.addEventListener("keypress", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}`;
});
