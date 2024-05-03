//1~100까지 더하기
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

//1~100까지 숫자 가운데 홀수만 찾아서 더한 값 도출
