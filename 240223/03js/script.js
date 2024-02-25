// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

//주문하기 버튼을 눌렀을 때
//아래orderInfo에 출력되게 하라

//버튼을 불러온다
//문구를 불러온다
//오더인포를 불러온다
//클릭이벤트시 나타나게 한다

// const orderButton = document.querySelector("#order");
// const title = document.querySelector("#container h2");
// const orderInfo = document.querySelector("#orderInfo");

// orderButton.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(title.innerText);
//     newP.appendChild(textNode);
//     orderInfo.appendChild(newP);
//     newP.style.color = "red";
//     newP.style.fontSize = "1.2rem";
//   },
//   { once: true }
// );

// const newImg = document.createElement("img");
// const srcNode = document.createAttribute("src");
// srcNode.value =
//   "https://img.khan.co.kr/news/2023/01/02/news-p.v1.20230102.1f95577a65fc42a79ae7f990b39e7c21_P1.png";
// newImg.setAttributeNode(srcNode);
// document.body.appendChild(newImg);
// console.log(newImg);

// const today = new Date();
// const hrs = today.getHours();
// console.log(hrs);

// const container = document.querySelector("#container");
// const newImg = document.createElement("img");
// newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
// container.appendChild(newImg);

// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsNode);

// const basisNode = document.querySelectorAll("p");

// document.body.insertBefore(tsNode, basisNode);

const heading = document.querySelector("h1");

heading.addEventListener("click", () => {
  heading.remove();
});
