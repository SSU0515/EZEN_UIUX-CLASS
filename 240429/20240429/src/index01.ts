// class Person1 {
//   name?: string;
//   age?: number;
// }

// let ssu = new Person1();
// ssu.name = "kim";
// ssu.age = 23;

// console.log(ssu);

//class를 생성할 때 반드시 field값을 사전 정의해야만 class를
//만들 수 있는가? no!!! 접근제어자(public)를 활용해서 field값을 생략할 수 있다
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let ho: Person2 = new Person2("ssu", 23);

console.log(ho);

//자바스크립트를 활용해서 생성할 수 있는 class형태의 FM문법
class Person3 {
  name?: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let min: Person3 = new Person3("su", 24);

console.log(min);
