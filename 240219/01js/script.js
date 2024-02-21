//함수의 생김새
//단어(키워드)() => 함수

// prompt(); - 내장함수
// alert(); - 내장함수
// document.write();

//함수를 작동하려면 무엇이 필요할까?
//1) 함수를 구현 = 제작
//2) 함수를 호출 = 실행

//함수를 구현하려면 어떻게 해야할까?
// 함수를 구현하는 방법은 3가지가 있다
//1) 클래스 함수를 구현하는 방법
//2) 익명 함수를 구현하는 방법
//3) 화살표 함수를 구현하는 방법 - 가장 최신문법

//================================================================

//1부터 5까지 더해보세요

//초급
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

//중급- 만약 숫자를 1부터 5까지가 아닌 가변적으로 숫자가 바뀐다면 ? 계속 코드를 생성
//재활용성이 불가능한 코드
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

//고급 -클래스함수
//재활용이 가능한 코드 업그레이드

//함수를 구현했다
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

//함수를 호출했다
// calcSum(80);

//=================================================================

// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요."));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요."));

//클래스 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }

//익명 함수 -특정 식별자안에 넣어줘야함
// const sum = function (a,b){
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }

//화살표 함수 -
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// sum(userNum01, userNum02);

//==============================================================================

//return문 - 함수안에 결과값을 밖으로 꺼내오고 싶을경우

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calcSum(num);

// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);

//자바스크립트 코드를 작성하다보면 큰 이슈가 있다
//자바스크립트는 매우 큰 문제를 발견하면 콘솔창을 통해서 알려준다
//하지만 아주 사소한 문제점은 알려주지 않는다
//예를 들면 오타같은 경우 사소한 문법같은 경우는 알려주지 않는다
//코드상의 문제 발생 버그 발생
//버그 이슈를 해결하기위해 타입스크립트가 나온 것
//프론트엔드를 하고싶다면 타입스크립트를 배워야한다
//보다 효율적으로 버그를 찾는 방법

// const userNum01 = Number(prompt("첫번째 숫자"));
// const userNum02 = Number(prompt("두번째 숫자"));
// const userNum03 = Number(prompt("세번째 숫자"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(1, 2));

//================================================================

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(5);

//=================================================================

// const hi = "hello";

// function greeting() {
//   close.log(hi);
// }

// function greeting02{
//   console.log(hi);
// }
// //전역스코프
// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);

//=================================================================

// const factor = 5;

// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

//=================================================================

//ㅈㅏ바스크립트에서 권장사항
//1) var 보다는 let , const 키워드로 변수를 선언해라
//var를 사용하면 윈도우로 들어간다 사용하지말자
//2) 가급적인면 전역 스코프의 변수 선언은 피해라
//3) 그래서 var,let 보다는 const에 적응해라

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

//=================================================================

//즉시실행 함수 1번 2번 값이 같다!

//1)

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행 결과값 : ${sum}`);
// }

// sum(1,2);

//2)

// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행 결과값 : ${sum}`);
// })(1, 2);

//=================================================================
//호이스팅 기법 - 무언가를 끌어올리다
//클래스 함수는 호이스팅 /화살표 & 익명 x

// function example() {
//   console.log("hello");
// }

// const example = () => {
//   console.log("hello");
// };

// example();

//화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는
//실행문을 보호하는 중괄호와 값을 반환시켜주는  리턴문을 생략해도 문제없이 작동
//탄생한 이유: 반복적으로 사용되는 function과 함수명을 생략
//자바스크립트의 근봅없는 구현 호출부의 순서를 명확하게 정의
//함수의 실행문에서 굳이 중괄호와 리턴문을 사용하지 않아도 구현할 수 있도록 해주기 위한 목적

// let hi = function () {
//   return `안녕하세요!`;
// };

// let hi = () => `안녕하세요!`;
// console.log(hi());

//변수 선언시 let const var를 사용하지 않으면 무조건 전역변수화가 된다

//=================================================================
//콜백함수-함수 안에 또다른 함수를 호출할 때 부르는 용어
// const btn = document.querySelector("button");

// const display = () => {
//   alert("오늘도 파이팅입니다!");
// };
//위아래 똑같다
// btn.addEventListener("click", () => {
//   alert("오늘도 파이팅입니다!");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요 ${name}님 나이가 ${age}살 이군요!`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

//return안에 또 다른 함수가 반환값으로 드어올 수 있어야한다

//=================================================================

// const addNum = (a, b) => a + b;
// console.log(addNum(1, 3, 5, 7));

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   return str01;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

//window 운영체제 => 내장함수 사용
//자바스크립트는 싱글 스레드(1차선 통행)로 작동하는 객체지향 프로그래밍 언어
//1차선에서 사고가 나면 사고차량이 치워지기 전 까지 움직이지 못한다.
//멀티 스레드 복수의 차선을 만들 수 있다
//로딩스피너

//setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수

// const greeting = () => {
//   console.log("안녕하세요");
// };

//1000밀리초 = 1초

// 이렇게 두가지로 쓸 수 있다

// setInterval(greeting, 2000);

// setInterval(() => {
//   console.log("안녕하세요");
// }, 2000);

//clearInterval() : 특정 조건에 따라서 반복 실행 함수를 멈추게 하는 함수

//단락 회로 평가

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수
// heap, callstack, que

// setTimeout(() => {
//   console.log("안녕");
// }, 3000);
