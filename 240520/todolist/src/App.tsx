import React from "react";
import { createGlobalStyle } from "styled-components";
import Todolist from "./Components/Todolist";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-style: normal;
  }
  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todolist />
    </>
  );
}

export default App;
