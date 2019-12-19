import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import video from "../loop_home.mp4";
import { ThemeContext } from "./theme-context";

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
    item: video
  },
  class: "active"
};

export default () => {
  const [theme, setTheme] = React.useState(initTheme);

  return React.useMemo(() => {
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Container theme={theme}>
          <Wrapper />
        </Container>
      </ThemeContext.Provider>
    );
  }, [theme]);
};
