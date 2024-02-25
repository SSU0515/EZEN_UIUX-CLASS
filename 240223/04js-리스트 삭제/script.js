// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;

// const items = document.querySelectorAll("li");

// for (let item of items) {
//   item.addEventListener("click", function () {
//     item.parentNode.removeChild(this);
//   });
// }

//단 조건 현재 선택한 li 태그를 this 객페로 대체해서 사용할 수 있음
// 단 클래스 함수를 사용할 때에만 가능
//화살표 함수를 사용할 때에는 this객체가 이벤트를 실행시키는 당사자 =주체가 되는것이 아니라 윈도우 객체가 this가 된다

// 장바구니 안에 있는 요소를 지운다
//아이템 p를 누르면 삭제된다

// const products = document.querySelectorAll("p");

// for (let product of products) {
//   product.addEventListener("click", function () {
//     product.parentNode.removeChild(this);
//   });
// }

const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
