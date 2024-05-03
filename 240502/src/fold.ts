//1~100까지 더하기
export const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  let result = initValue;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

//1~100까지 숫자 가운데 홀수만 찾아서 더한 값 도출
