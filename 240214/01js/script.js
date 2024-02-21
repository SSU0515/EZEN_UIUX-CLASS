// let arr = [1, 2, 3, 4];

// let arrStr = ["a", "b", "c"];

// let arr01 = [];

// console.log(arr[2]); --- 1
// console.log(arrStr.length); --- 3

// let var1 = Symbol();
// let var2 = Symbol();

// console.log(var1 === var2); --- false

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,  --- symbol을 가져오려면 []를 넣어줘야한다
// };

// console.log(member01);

// const member02 = {
//   name: "Kim",
//   id: 12345,
// };

// console.log(member02);

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };

// member01.id = 6789;

// let grade = Symbol("grade");

// member01[grade] = "VIP";

// console.log(member01);

// const fnc = function() {
//   console.log("test");
// };

// let str = "20";
// let num = 10;

// let result = str + num;
// let result = Number(str) + num;  --- Number()매개변수로 들어오는 값을 숫자형으로 형변환

// console.log(result);

// let result01 = str - num;

// console.log(result01);

// console.log(Number(true)); --- 1
// console.log(Number(false)); --- 0
// console.log(Number("Hi!")); --- NaN 회원가입시 조건식으로 쓰인다
// console.log(Number("30")); --- 30

// const userAge = Number(prompt("당신의 나이를 입력하세요."));
// console.log(typeof userAge); --- number

// const userAge = parseInt(prompt("당신의 나이를 입력하세요."));

// console.log(typeof userAge); --- number
// console.log(parseInt(false));---NaN

// const userHot = parseInt(prompt("당신은 체온을 입력해주세요!"));

// console.log(userHot); --- 정수만 출력

// const userHot = parseFloat4(prompt("당신은 체온을 입력해주세요!"));

// console.log(userHot);  --- 소수점까지 출력

// let num = 10;

// console.log(typeof num.toString());

// console.log(typeof String(false));

//사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹브라우저 화면에 섭씨온도를 출력해주세여
//공식 섭씨온도 = (화씨온도-32) /1.8

// const fah = Number(prompt("현재 화씨온도를 입력해주세요."));

// const cel = ((fah - 32) / 1.8).toFixed(1); //소수점 첫째자리까지 보여주겠다

// document.write(`화씨${fah}도는 섭씨${cel}도 입니다.`);
