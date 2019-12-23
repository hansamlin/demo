import React, { useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import sumeitse from "../sumeitse.jpg";
import zorn from "../zorn.jpg";
import video from "../loop_home.mp4";
import { ThemeContext } from "./theme-context";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: 10px solid;
  border-color: ${({ theme }) => theme.color};
  background: black;
  transition: border-color 400ms ease-in-out;

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 100%
    );
    content: "";
    display: block;
    height: 330px;
    margin-top: 10px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    top: 0;
    touch-action: none;
    transition: opacity 0.35s ease-out;
    width: calc(100% - 20px);
    z-index: 50;
  }
`;

const initTheme = {
  color: "#3d439b",
  background: {
    type: "video",
    item: video
  },
  slider: "center"
};

const panels = [
  {
    color: "#e5439a",
    background: {
      type: "img",
      item: `url("${zorn}")`
    },
    slider: "left"
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: video
    },
    slider: "center"
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: "right"
  }
];

const width = "(100vw - 20px)";
const divWidth = `(${width} / 3.6)`;

const position = {
  left: "translate(0, 0)",
  center: `translate(calc(${divWidth} + ((${width} - (${divWidth} * 3)) / 2)), 0)`,
  right: `translate(calc((${divWidth} * 2) + ((${width} - (${divWidth} * 3)) / 2) * 2), 0)`
};

export default () => {
  const [theme, setTheme] = React.useState(initTheme);
  const [action, setAction] = React.useState({
    class: "active",
    theme,
    init: true,
    slider: "center"
  });

  // useEffect(() => {
  //   if (action.init === false) {
  //     if (action.class) {
  //       const newTheme = action.theme;
  //       setTheme({
  //         ...newTheme,
  //         class: action.class,
  //         fixColor: action.fixNewColor
  //       });
  //     } else {
  //       setTheme(prevTheme => ({
  //         ...prevTheme,
  //         class: action.class,
  //         fixColor: action.fixNewColor,
  //         slider: action.slider
  //       }));
  //     }
  //   }
  // }, [action]);
  return React.useMemo(() => {
    // console.log(theme);
    return (
      <ThemeContext.Provider
        value={{ theme, setTheme, position: position[action.slider] }}
      >
        <Container theme={theme}>
          <Wrapper panels={panels} />
        </Container>
      </ThemeContext.Provider>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
};
