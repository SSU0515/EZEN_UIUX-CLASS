import React from "react";
import "./App.css";
import styled from "styled-components";
import Title from "./components/Title.tsx";
import TodoItem from "./components/TodoItem.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
`;

function App() {
  return (
    <Container>
      <Title label="TO DO" />
      <TodoItem label="리액트 공부하기" />
    </Container>
  );
}

export default App;
