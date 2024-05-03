//1~10까지의 배열을 완성하고 2개의 새로운 신규배열 생성
//1번째 배열에는 1~5,2번째 배열에는 6~10

import { range } from "./range";

// const array: number[] = range(1, 11);

// const oneFive: number[] = array.filter((value) => value <= 5);
// const sixTen: number[] = array.filter((value) => value > 5 && value <= 10);

// console.log(oneFive, sixTen);

const array: number[] = range(1, 11);
const half = array.length / 2;

const belowHalf = array.filter((value, index) => index < half);
const overHalf = array.filter((value, index) => index >= half);
