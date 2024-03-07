const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  // this.finish = function () {
  //   this.done === finish ? (str = "읽는 중") : (str = "완독");
  //   return str;
  // };
};

Book.prototype.finish = function () {
  this.done = false ? (str = "읽는중") : (str = "완독");
  return str;
};

const book1 = new Book("자바스크립트", 648, false);
console.log(book1.finish());

//생성자 함수 => 프로토타입 => 인스턴스
// Object(__proto__) => Book(prototype) => book1(__proto__)
