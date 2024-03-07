//iterable object 이터러블 객체
//사전적 의미 순차적인,개념적 의미 순서대로 무언가를 처리할 수 있는
//순서대로 무언가의 연산작업을 처리할 수 있는 객체
//index값처럼 순번 할당 값
// 일반객체는 이터러블 객체라고 보기 힘들다
//문자열,배열,Map,Set객체는 이터러블 객체

//태생이 이터러블 객체가 아니더라도 이 요소들을 이터러블한 속성으로 변경시켜서
//반복문을 사용할 수 있도록 하기 위한 목적

//이터러블 객체의 속성과 특징을 파악해보자

// const hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }

// const chArray = [...hi];
// console.log(chArray);

// const [ch1, ch2] = hi;
// console.log(ch1, ch2);

//const arr = [1, 2, 3, 4, 5];

//console.log(arr);
//이터러블하ㅣㅈ 않은 객체 이터러블한 객체변환하려면 제너레이터 함수를 사용

const fnc = () => {
  console.log("1");
  console.log("2");
  console.log("3");
};

fnc();

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();

const g2 = gen();

for (let i of g2) {
  console.log(i);
}
