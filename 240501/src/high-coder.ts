//일반적인 함수
// const add1 = (a: number, b: number): number => a + b;

// const add2 =
//   (a: number): ((arg0: number) => number) =>
//   (b: number): number =>
//     a + b;

// const result = add2(1)(2);
// console.log(result);
export type NumberToNumberFunc = (arg0: number) => number;
export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b;
  };
  return _add;
};
