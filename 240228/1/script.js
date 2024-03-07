// //객체
// //프로퍼티
// //프로퍼티 = 속성

// const book1 = {
//   title: "자바스크립트",
//   pages: 688,
// };

// //온점 표기법
// console.log(book1.title);

// //대괄호 표기법
// console.log(book1["pages"]);

// book1.pages = 50;

// console.log(book1);

// book1.author = "David";

// console.log(book1);

// new Date();
// new Object();
// new Array();

// //프로토타입 = 붕어빵 틀
// //인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵

// const book2 = new Object();
// console.log(typeof book2);

// book2.title = "Typescript";
// book2.pages = 500;
// book2.author = "Alice";
// console.log(book2);

//객체 중첩
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }

// if (true) {
//   if (true) {
//     console.log("true");
//   }
// }

// const student = {
//   name: "ssu",
//   score: {
//     history: 85,
//     math: 60,
//     average: function () {
//       return (this.history + this.math) / 2;
//     },
//   },
// };

//매서드= 함수
// console.log(student.score.average());

// const book3 = {
//   title: "파이썬",
//   pages: 350,
//   buy() {
//     console.log("구입");
//   },
// };

//원시타입.참조타입
//래처런스

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };

//커스터마이징 된 객체를 생성
//생성자"함수" 다른 일반적인 함수와는 기능이 상이하다
//함수이름 첫글자 => 대문자 입력
//만들어질 객체 = 붕어빵

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  };
}

const book1 = new Book("자바스크립트", 648, false);
const book2 = new Book("파이썬", 342, true);

console.log(book1);
console.log(book2);

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "읽는 중");
  }
}

const book4 = new Book2("HTML5", 380, true);
console.log(book4);
