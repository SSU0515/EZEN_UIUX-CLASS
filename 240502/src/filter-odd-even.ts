import { range } from "./range";

const array: number[] = range(1, 11);

const odds: number[] = array.filter((value) => value % 2 !== 0);
const evens: number[] = array.filter((value) => value % 2 === 0);

console.log(odds, evens);
//[ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
