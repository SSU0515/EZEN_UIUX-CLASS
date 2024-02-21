// for(초기값;조건식;증감문){
//   실행문
// }

// const students = ["박", "김", "이", "강"];

//or (let i = 0; i < students.length; i++) {
// document.write(`${students[i]}, `);
//}

//배열 forEach(function(배열안에 있는 각각의 아이템)){
// 실행문
//}

//students.forEach(function (student) {
//  document.write(`${student}, `);
//});

//for문을 활용하여 구구단 출력하기
//중첩해서 사용가능

//for (let a = 2; a <= 9; a++) {
// document.write("<h2>" + "[구구단 " + a + "단]" + "</h2>");
// for (let b = 1; b <= 9; b++) {
//   document.write(a + "x" + b + "=" + a * b);
//   document.write("<br>");
// }

//중첩 for문을 활용해서 5행 5열 테이블
//
//let num = 1;
//let t = "<table border=1>";
//for (let i = 1; i <= 5; i++) {
//  t += "<tr>";
//  for (let k = 1; k <= 5; k++) {
//    t += "<td>" + num + "</td>";
//    num++;
//  }
//  t += "</tr>";
//}
//t += "</table>";
//document.write(t);

//객체 전용 for in
//배열 전용 for of
//
//const gitBook = {
//  title: "깃 &깃허브",
//  pubDate: "2024-02-15",
//  pages: 272,
//  finished: true,
//};
//
//for (key in gitBook) {
//  document.write(`${key} : ${gitBook[key]}<br>`);
//}

//for (students of students) {
//  document.write(`${student}, `);
//}

// let stars = Number(prompt("별점을 매겨주세요!"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

// do {
//   document.write("*")
//   stars--;
//   while (stars > 0);
// }

// for(let i =1; 1<=100; i++){
//   if(1 %5 === 0 && i % 7 != 0){
//    document .write
//   }
// }

//break문 예시

// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// //continue문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }
// i % 1 === 0 && i % i === 0;
//사용자에게 숫자를 하나 전달받으세요
//해당숫자가 소수인지 아닌지 식별한 후 소수라면 00숫자는 소수입니다 라고 출력해주세요
//소수: 1과 자기 자신으로만 나눠질수 있는 숫자

// const userNum = prompt("숫자를 입력해주세요");

// for (let i = 1; i >= 1; i++) {
//   if (i % 1 === 0) {
//     continue;
//   } else if (i % i === 0) {
//     document.write(`${userNum}는 소수입니다`);
//   }
// }

//const number = Number(prompt("숫자를 입력하세요"));

//단락회로평가 :특정값이 논리형 값 => true/false

// let isPrime;

// if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % 1 === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${number}는 소수입니다`);
// } else {
//   document.write(`${number}는 소수가 아닙니다`);
// }

//웹 브라우저 화면에 아래에 보이는 배열 아이템중 10 이상되는 숫자만 출력되게 해주새요

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, 8`);
//   }
// }

//사용자에게 1보다 큰 수를 하나 전달받으세요 
//사용자에게 받은 숫자까지 반복 
//그리고 그 숫자 안에 있는 짝수들만 더해서 웹브라우저 화면에 출력해주세요

const number = Number(prompt("1보다 큰 수를 입력해주세요"))

for (let i = 1; i<= number; i++){
  if(i % 2 === 1){
    continue;
  }else{
    sum+= i;
    document.write(`${sum}`);
  }
  }