import React from "react";

//구조분해할당을 해서 값을 가져온다
const Viewer = ({ num }) => {
  console.log("viewer component update");
  //삼항조건연산자
  return (
    // <div>{num % 2 === 0 ? <h3>짝수입니다.</h3> : <h3>홀수입니다.</h3>}</div>
    <div>Viewer</div>
  );
};

export default Viewer;
