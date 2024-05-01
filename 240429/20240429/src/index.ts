// 타입 주석을 달았다!
//실제 실무에서는 타입주석을 특별한 케이스가 아니면 잘 사용하지 않음
// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

// 타입 불일치 발생! 즉각경고!
//타입스크립트는 탑입 추론
// n = "a";
// b = 1;
// s = false;

// let m = 1;
// let p = "HEllo";
// let q = false;
// let obj = {};

//치트키 너무 막 사용하지 말기
//초 슈퍼타입!!!
// let any: any = 0;

// any = "10";
// any = true;
// any = {};
// any = undefined;

//undefined는 undefined만 받을 수 있다
// let unTest: undefined = undefined;

// let numTest = 10;

//실무에서는 object타입을 거의 안씀
// let o: object = {
//   name: "SSU",
//   age: 23,
// };

// o = {
//   name: 7,
//   age: 2,
// };

//객체의 프로퍼티의 타입을 정의해준다
interface IPerson {
  name: string;
  age: number;
}

let good: IPerson = {
  name: "SSU",
  age: 23,
};

// let bad: IPerson = {
//   name: "rk",
//   age: 33,
// };

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let good1: IPerson2 = {
  name: "SSU",
  age: 23,
};

let good2: IPerson2 = {
  name: "SSU",
  age: 23,
  etc: false,
};

//익명 interface => 고차함수
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "SSU",
  age: 20,
};

const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age} `
  );
};

printMe(ai);
