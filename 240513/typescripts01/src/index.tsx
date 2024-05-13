import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App01 from "./App01";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App01 />
  </>
);
