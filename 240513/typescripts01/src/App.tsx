import React from "react";
import { styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="black" bgColor="tomato" />
      <Circle text="HELLO" bgColor="pink" />
    </div>
  );
}

export default App;
