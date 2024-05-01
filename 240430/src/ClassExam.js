//JS Class 반복적인 객체를 생성하고자 할 때 비효율성 감소

// const studentA = {
//   name: "min",
//   grade: "A+",
//   age: 23,
//   study() {
//     console.log("졸림");
//   },
//   introduce() {
//     console.log("하위");
//   },
// };

//필드와 생성자 함수에 들어간 name, grade, age은 다른것임
class Student {
  //필드 객체의 키를 의미
  name;
  grade;
  age;

  //생성자 함수
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //매서드 = 함수
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log(`안녕+${this.name}이다`);
  }
}

const studentA = new Student("쑤", "A+", 24);
studentA.study();
studentA.introduce();

//JS Class 생성 후 상속 기능
//클래스 간의 상속
//Student이미 생성된 클래스를 받아서 새로운 클래스 생성
class StudentDeveloper extends Student {
  //필드
  favoriteSkill;
  //생성자
  constructor(name, grade, age, favoriteSkill) {
    this.favoriteSkill = favoriteSkill;
  }
}
