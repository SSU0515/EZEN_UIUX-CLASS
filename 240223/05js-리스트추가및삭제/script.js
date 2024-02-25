//1. 제목과 저자 값을 찾아와야한다
//input > .value

//2.이벤트가 작동하도록 해주는 저장하기 버튼 정의

//버튼을 선택하고 클릭이벤트를 줄지 폼을 선택하고 서브밋이벤트를 줄지
//e.preventDefault()

//3.찾아온 값을 출력해주도록 도와주는 이벤트 함수
//addEventListener

//4. 출력할 공간에 대한 정의
//querySelector

//5. 삭제하기 버튼 정의
//createElement.appendChild

//6.삭제하기 버튼이 복수의 갯수로 생성 => 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서
//this(클래스함수 vs 화살표함수)

//7. 삭제하기 버튼 클릭 시, 목록삭제 이벤트 함수
//parentNode, removeChild

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      //체이닝 기법 복잡하게 일부러 해봤다
    });
  }
});
