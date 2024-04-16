import "./App.css";
import { useState, useRef } from "react";
//특정요소를 돔처럼 컨트롤하고 싶을경우 useRef사용
const App01 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  console.log(textRef);
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "";
    }
  };
  return (
    <div className="App">
      <input ref={textRef} value={text} onChange={handleOnChange}></input>
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
};

export default App01;
