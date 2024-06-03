// //타입별칭

// type User = {
//   id: number;
//   name: string;
//   nickname: string;
//   birth: string;
//   bio: string;
//   location: string;
// };

// const user = {
//   id: 1,
//   name: "김수현",
//   nickname: "ssu",
//   birth: "2001.05.15",
//   bio: "hello",
//   location: "서울",
// };
// const user1 = {
//   id: 2,
//   name: "김민호",
//   nickname: "min",
//   birth: "1999.02.18",
//   bio: "hello",
//   location: "서울",
// };

// //타입 호환성
// //슈퍼타입과 서브타입

// //숫자 10보다 number가 슈퍼타입
// let num1: number = 10;
// //타입 리터럴
// let num2: 10 = 10;

// //가능
// // num1 = num2;
// //에러 --
// // num2 = num1;

// // interface Animal {
// //   name: string;
// //   color: string;
// // }

// // interface Dog {
// //   name: string;
// //   color: string;
// //   breed: string;
// // }

// // let animal: Animal = {
// //   name: "기린",
// //   color: "yellow",
// // };

// // let dog: Dog = {
// //   name: "초코",
// //   color: "brown",
// //   breed: "말티푸",
// // };

// //dog < animal 객체 혹은 인터페이스 타입보다 더 많은 결과 값을 갖고 있기 때문에 슈퍼타입인것은 아니다

// //슈퍼타입
// // animal = dog;
// //에러 breed 속성이 Animal형식에 없지만 Dog 형식에서 필수
// // dog = animal;

// //초과 프로퍼티 검사 변수안에 담긴 어떤 값
// //자바스크립트라는 프로그래밍 언어는 변수 안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사

// // 1) 타입별칭
// // 2) 타입호환
// // 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사 => 타입검사 & 함수 매개변수

// interface Book {
//   name: string;
//   price: number;
// }

// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook = {
//   name: "JS",
//   price: 33000,
//   skill: "react.js",
// };

// let book2: Book = programmingBook;

// let book = programmingBook;

// const func = (book: Book) => {};

// func(programmingBook);

// //대수타입

// //합집합(Union) 타입
// let a: number | string | boolean; // number, string, boolean union type
// a = 1;
// a = "Hello";
// a = true;

// let arr: (number | string | boolean)[] = [1, "hello", true];

// //interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고 있는 타입 정의가
// //있더라도 충돌되지 않습니다.
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// type Union1 = Dog | Person;

// // ✅
// let union1: Union1 = {
//   name: "",
//   color: "",
// };
// // ✅
// let union2: Union1 = {
//   name: "",
//   language: "",
// };
// // ✅
// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// type Intersaction = Dog & Person

//열거할 수 있는 열거형 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "David",
  role: Role.ADMIN,
};

const user2 = {
  name: "jasic",
  role: Role.USER,
};

const user3 = {
  name: "seki",
  role: Role.GUEST,
};
