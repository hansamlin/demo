import React from "react";
import ThemeContextProvider from "./components/container/ThemeContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider />
    </>
  );
};

export default App;
