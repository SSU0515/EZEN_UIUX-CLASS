//선언형
//결과값을 단순 도출 목적이라면 명령형이 편함 하지만 선언형 코드를 작성할 수 있어야함
// import { range } from "./range";
// import { fold } from "./fold";

//1~100까지 더하기
// const numbers: number[] = range(1, 101);

// const result = fold(numbers, (result, value) => result + value, 0);

// console.log(result);

//1~100까지 숫자 가운데 홀수만 찾아서 더한 값 도출
// import { range } from "./range";
// import { fold } from "./fold";
// import { filter } from "./filter";

// const numbers: number[] = range(1, 101);

// const idOdd = (n: number): boolean => n % 2 !== 0;
// const result = fold(
//   filter(numbers, idOdd),
//   (result, value) => result + value,
//   0
// );

// console.log(result);

//1~100까지 숫자 가운데 짝수만 찾아서 더한 값 도출
// import { range } from "./range";
// import { fold } from "./fold";
// import { filter } from "./filter";

// const numbers: number[] = range(1, 101);

// const idEven = (n: number): boolean => n % 2 === 0;
// const result = fold(
//   filter(numbers, idEven),
//   (result, value) => result + value,
//   0
// );

// console.log(result);

//1~100까지 숫자 모두 제곱한 후 더한 값 도출
import { range } from "./range";
import { fold } from "./fold";
import { map } from "./map";

const numbers: number[] = range(1, 101);

const result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);

console.log(result);
