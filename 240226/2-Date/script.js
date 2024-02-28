// console.log(today.getFullYear());
// const theDay = new Date("2025-02-25");
// const theDay = new Date(2025, 2, 25);
// console.log(theDay.getMonth());

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월 : ${nowMonth}월 <br/>`);
// document.write(`현재 일 : ${nowDate}일 <br/>`);

// const open = new Date("2024-01-09");
// console.log(open);
// const theMonth = open.getMonth() + 1;
// const theDate = open.getDate();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write(`개강일 몇 월 : ${theMonth}월 <br/>`);
// document.write(`개강일 몇일 : ${theDate}일 <br/>`);

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - today.getTime();
const result = Math.floor(diffDate / (24 * 60 * 60 * 1000));

document.write(`연말 D-day : ${result}일 남음`);
