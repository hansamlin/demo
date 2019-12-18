import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Wrapper from "./components/HomePage/Wrapper";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: 10px solid;
  border-color: ${props => props.theme.border};
`;

function App() {
  const [theme, setTheme] = useState({ body: "#12144e", border: "#3d439b" });

  return (
    <>
      <GlobalStyle />
      <Container theme={theme}>
        <Wrapper setTheme={setTheme} />
      </Container>
    </>
  );
}

export default App;
