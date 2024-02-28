//사용자로 부터 "오늘부터 며칠간 만 보 걷기"를 했는지를 물어보고 임의 날짜를 받으세요
//00일 연속 달성 출력될 수 있도록 해주세요

//사용자에게서 날짜 값을 받는다

// const result = document.querySelector("#result");

// const userDay = prompt(
//   "오늘부터 며칠간 만 보 걷기를 하셨나요? ☺️",
//   "ex.2024-01-13"
// );

// const now = new Date();
// const firstDay = new Date(`${userDay}`);

// const toNow = now.getTime();
// const toFirst = firstDay.getTime();
// const passedTime = toNow - toFirst;

// const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));
// console.log(passedDay);

// result.innerText = `${passedDay}`;

const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요! ☺️",
  "ex.2024-01-13"
);

const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
