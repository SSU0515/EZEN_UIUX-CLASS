//사용자에게 키와 몸무게의 값을 받는다
//사용자에게 받은 값으로 연산을 한다
//(몸무게/ 키 100 나눔)제곱
//결과를 화면에 출력한다

//const userHeight = document.querySelector("#height");
//const userWeight = document.querySelector("#weight");
//const submit = document.querySelector("input[type='submit']");
//const claH = userHeight / 100;
//const result = (userWeight / claH) * (userWeight / claH);
//
//const formCla = function (e) {
//  e.preventDefault();
//  result.value
//};

//1.키와 몸무게 값 정의하기
//2.버튼과 결과값 정의하기
//3. 버튼 이벤트 연산 작업하기
//3-1. 키와 몸무게값을 활용해서 연산 => 변수명=>할당
//3-2. 함수와 조건문 연산작업
//4. 결과출략

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi} -> ${group}입니다.`;
};

const calculate = (height, weight) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value != "" && heightInput.value != "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(height, weight);
    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
