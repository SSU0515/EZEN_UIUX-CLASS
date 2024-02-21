// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("img");
// const users = document.querySelectorAll(".user");
// const address = users[1];

// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementsById("profile");
// const users = document.getElementsById("user");

// console.log(h1);
// console.log(users);

// const desc = document.querySelector("#desc");

//desc.innerText = "이름 : 홍길동";
// const descName = desc.innerText;
// const descHTML = desc.innerHTML;
// const descContext = desc.textContent;

// const title = document.querySelector("h1");

// title.onclick = function () {
//   title.innerText = "마이프로필";
// };

// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("#profile img");
// pfImg.onclick = () => (pfImg.src = "./images/pf2.png");

// const title = document.querySelector("h1");
// const userName = document.querySelectorAll(".user")[0];

// title.onclick = () => {
//   title.style.backgroundColor = "salmon";
//   title.style.color = "#fff";
// };

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// const clickedTrue = userName.classList.contains("clicked");

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

// userName.onclick = () => {
//   userName.classList.toggle("clicked");
// };

// const btn = document.querySelector("#toggle-box button");
// const body = document.querySelector("body");

// btn.onclick = () => {
//   if (!btn.classList.contains("clicked")) {
//     btn.classList.add("clicked");
//     btn.innerHTML = "다크모드로 바꾸기";
//     body.style.backgroundColor = "#fff";
//     body.style.color = "#333";
//   } else {
//     btn.classList.remove("clicked");
//     btn.innerHTML = "라이트모드로 바꾸기";
//     body.style.backgroundColor = "#333";
//     body.style.color = "#fff";
//   }
// };

const body = document.querySelector("body");
const button = document.querySelector("toggle-box button");

button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
