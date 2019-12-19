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
  border-color: ${({ theme }) => theme.color};
`;

const initTheme = {
  color: "#3d439b",
  background: {
    type: "video",
    item:
      "https://www.gardnermuseum.org/sites/default/files/videos/home/170710-hydrangea-loop_home_0.mp4"
  },
  class: "active"
};

function App() {
  const [theme, setTheme] = useState(initTheme);

  return (
    <>
      <GlobalStyle />
      <Container theme={theme}>
        <Wrapper theme={theme} setTheme={setTheme} />
      </Container>
    </>
  );
}

export default App;
