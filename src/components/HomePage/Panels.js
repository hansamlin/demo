import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";

const activeBackGround = props => props.color;

const Panels = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: calc(100% / 3.6);
  z-index: 2;

  transition: transform 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9),
    background-color 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9),
    width 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9),
    padding 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9);

  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    #fff 70px,
    #fff calc(100% - 280px),
    rgba(255, 255, 255, 0) 100%
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    #fff 70px,
    #fff calc(100% - 280px),
    rgba(255, 255, 255, 0) 100%
  );

  &.active {
    transition: opacity 1s ease-in-out;
    background: ${activeBackGround};
    opacity: 0.4;
  }

  &.fade {
    transition: opacity 2s ease-in-out;
    // opacity: 0;
  }
`;

export default ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Panels
      onMouseEnter={() => setTheme({ ...children, class: "active" })}
      onMouseLeave={() => setTheme({ ...children, class: "fade" })}
      className={
        "panels " + (theme.color === children.color ? theme.class : "")
      }
      theme={theme}
      color={children.color}
    />
  );
};
