import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Label from "./components/Label";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Title = styled.h1`
  margin-bottom: 32px;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <Container>
      <Title>카운터</Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}

export default App;
