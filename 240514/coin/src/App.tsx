import React, { useState } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Barlow", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:  ${(props) => props.theme.textColor};
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  // const [isDark, setIsDark] = useState(false);

  // const toggleDark = () => {
  //   setIsDark((current) => !current);
  // };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
