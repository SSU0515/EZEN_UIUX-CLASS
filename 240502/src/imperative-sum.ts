//명령형
//결과값을 단순 도출 목적이라면 명령형이 편함 하지만 선언형 코드를 작성할 수 있어야함

//1~100까지 더하기
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

//1~100까지 숫자 가운데 홀수만 찾아서 더한 값 도출
// let oddSum = 0;
// for (let i = 1; i <= 100; i += 2) {
//   oddSum += i;
// }

// console.log(oddSum);

//1~100까지 숫자 가운데 짝수만 찾아서 더한 값 도출
// let evenSum = 0;
// for (let i = 0; i <= 100; i += 2) {
//   evenSum += i;
// }

// console.log(evenSum);

//1~100까지 숫자 모두 제곱한 후 더한 값 도출
let squareSum = 0;

for (let i = 1; i <= 100; i++) {
  squareSum += i * i;
}

console.log(squareSum);
