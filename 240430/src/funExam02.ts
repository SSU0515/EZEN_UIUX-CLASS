interface INameable {
  name: string;
}

//타입가드
//리액트를 사용할 때, useState를 활용해서 state의 초기값이 아직 정해지지 않은 상태에서 최초 랜더링 될때
//undefined타입으로 결정될 때가 분명 반드시 있을 것이다.
//유니온 타입 Union Type
const getName = (o: INameable | undefined) => {
  return o !== undefined ? o.name : "unknown name";
};

const n = getName(undefined);
console.log(n);
