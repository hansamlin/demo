import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Wrapper from "./homePage/Wrapper";
// import { fromEvent } from "rxjs";
// import { filter } from "rxjs/operators";

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
  border: 10px solid #393f93;
`;

// React.useEffect(() => {
//   const hoverSubscribe = fromEvent(
//     document.querySelectorAll(".panels"),
//     "mouseenter"
//   )
//     .pipe(
//       filter(e => e)
//     )
//     .subscribe(color => console.log(color));

//   return () => hoverSubscribe.unsubscribe();
// }, []);

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper />
      </Container>
    </>
  );
}

export default App;
