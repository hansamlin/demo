import React from "react";
import { createGlobalStyle } from "styled-components";
import ThemeContextProvider from "./components/HomePage/ThemeContext";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider />
    </>
  );
}

export default App;
