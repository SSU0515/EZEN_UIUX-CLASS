//number1과 number2를 불러온다
//출력될공간을 정의
//계산하기 버튼을 클릭했을 때 결과공간에 값을 출력
//출력시켜주기위한 연산작업이 필요하다

const firstNum = document.querySelector("#number1");

const secondNum = document.querySelector("#number2");

const button = documnet.querySelector("form input[type:'submit]");

const result = document.querySelector("#result");

// console.log(number1);
// console.log(number2);

const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i < max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = function () {
  e.preventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
