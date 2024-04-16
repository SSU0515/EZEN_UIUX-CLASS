import "./App.css";
//상태변화가 생겼다면 바로 useState사용한다
import { useState } from "react";
import Viewer from "./components/Viewer.js";

function App() {
  //구조분해할당
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  //출력하는것을 보여주는게 return문
  return (
    <div className="App">
      <h2>{number}</h2>
      <Viewer num={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;
