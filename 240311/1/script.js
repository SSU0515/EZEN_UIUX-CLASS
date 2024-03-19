//외부에서 데이터르 ㄹ 받아서 웹브라우저에 출력하는 일이 많아지면서
//js는 동기처리 방식의 언어인데
//비동기 처리 방식 사용을 하려면
//callback,setInterval(),setTime(),setClear(),promise사용

//promise객체

//계획한 실행이 예정대로 진행되었을 때 무언가를 추가로 실행하겠다라는 약속

// const likePizza = false;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("pizza order");
//   } else {
//     reject("no more pizza");
//   }
// });

// pizza.then((result) => console.log(result)).catch((err) => console.log(err));

//외부데이터를 가져올 때 예외조항 처리
//에러가 발생했을 때 미리 에러메세지를 커스텀
//try,catch/finally

const likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("order pizza");
  } else {
    reject("no more pizza");
  }
});

//메서드 체이닝 method chaining기법
//1개의 객체 뒤에 연달아서 복수의 매서드 함수를 붙여서 실행시키도록 설계한 코딩기법
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
