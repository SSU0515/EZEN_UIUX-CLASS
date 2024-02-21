//사용자로부터 숫자하나를 받는다
//해당숫자가 양수인지 음수인지 0인지 판단한다
//알림창을 활용해서 결과값을 출력한다
//반환값은 숫자일 경우에만 함수를 시랭시킨다

const number = parseInt(prompt("숫자를 입력하세요!"));

const ispositive = >(n) {
  if(n>0){
    alert(`${n}은 양수입니다.`);
  }
  `if(n>0){
    alert(${n}은 양수입니다.``);
  }

}

if(!isNaN(number)){
  ispositive(number);
}