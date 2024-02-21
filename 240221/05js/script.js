//form안에 있는 input 입력창을 불러온다
//사용자가 클릭할 버튼에 정의
//버튼을 클릭했을 때 이벤트에 대한 기능 정의
//li태그를 DOM에서 생성해준다 =>입력창을 통해서 전달받은 값을
//li태그에 삽입=> ul태그 자식요소
//사용자가 입력한 값을 출력할 공간에 대한 정의

const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;
