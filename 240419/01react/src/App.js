import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import box from "./box";
import { useState } from "react";
//useDispatch 한번 거쳤다 간다 그리고 안에는 무조건 객체가 있어야한다
function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREMENT",
      payload: { num: 5 },
    });
  };
  const decrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: { num: -5 },
    });
  };
  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { id: "ssu", password: "1234" },
    });
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrease}>감소하기</button>
      <button onClick={increase}>증가하기</button>
      <box />
      <button onClick={login}>로그인</button>
      <h1>
        {id} {password}
      </h1>
    </div>
  );
}

export default App;
