/*자바스크립트 외부에서 데이터를 가져올때 비동기 방식으로 처리를 해줘야지만 큰용량의 데이터를 다 가져오지 못한 상태라도
밑에 다른 작은 규모의 데이터를 가져올 수 있다*/

/**아ㅏ */

// const displayHello = () => {
//   console.log("HELLO");
// };

// displayHello();

// async function displayHello01() {
//   console.log("Hello");
// }

// displayHello01();

/**순수 promise 객체를 활용한 비동기처리 실행문 */

// const whatYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`hello,${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

//async예약어를 활용해서 Promise 객체 생성및 사용
// async function whatYourFavorite() {
//   const fav = "javascript";
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello, ${subject}`;
// }

// whatYourFavorite().then(displaySubject).then(console.log);

async function whatYourFavorite() {
  const fav = "Typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}
init();
