// //함수와 매개변수 및 인자(*인수)값 작동원리
// const hello = (name, message = "안녕하세요!") => {
//   console.log(`${name}님 ${message}`);
// };

// hello("홍길동", "반갑습니다.");
// hello("영심이");

// //함수,나머지 매개변수
// const addNum = (...numbers) => {
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// };

// console.log(addNum(1, 2));
// console.log(addNum(1, 2, 3, 4, 5));

// //서로 다른 2개의 배열을 합치고자 할 때
// const animals = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];

// console.log(animals.concat(fruits));
// const result = [...animals, ...fruits];
// console.log(result);

// const fruits01 = ["apple", "banana", "cherry"];
// const fruits02 = fruits01;
// console.log(fruits01);
// console.log(fruits02);

// const fruits03 = [...fruits01];

// fruits01[0] = "grape";
// console.log(fruits01);
// console.log(fruits03);

// //객체안에 신규 Key & value를 생성하는 방법
// const book = {
//   title: "javascript",
//   page: 500,
// };

// book.published = "2024-03";

// book["author"] = "ssu";
// console.log(book);

// //객체 ,프로퍼티 이름을 함수로 생성하는 방법
// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키",
//   [`${add(10, 20)}`]: "계산식 키",
// };

// console.log(obj);

// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2);

// const id = Symbol("id");
// const tel = Symbol("telnumber");

// const member = {
//   name: "David",
//   age: 20,

//   fnc: function () {
//     console.log(test);
//   },

//   [id]: 1234,
//   [tel]: function () {
//     alert(prompt("전화번호 :"));
//   },
// };

// // console.log(member);
// // member.fnc();
// // member[tel]();

// for (let item in member) {
//   console.log(`${item} : ${member[item]}`);
// }

//전역 요소 심볼 생성 => 찾아오고 싶을 때

const tel = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tel === phone);

console.log(Symbol.keyFor(phone));
