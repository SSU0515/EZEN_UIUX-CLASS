import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesomoke",
  backgroundColor: "black",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
