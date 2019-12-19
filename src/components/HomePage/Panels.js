import React from "react";
import styled from "styled-components";

const Panels = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: calc(100% / 3.6);
  z-index: 2;
  transform: translate(0, 0);

  &.active {
    transition: opacity 1s ease-in-out;
    background: ${props => props.color};
    opacity: 0.4;
    transform: translate(0, 0);
  }

  &.fade {
    transition: opacity 400ms ease-in-out;
    opacity: 0;
  }
`;

export default function Context({ theme, children }) {
  // const class = theme.color === children.color ? "panels active" : "panels";
  // theme.fade === true ? "panels active fade" : "panels"
  // theme.hasOwnProperty("fade") ? "panels active fade" : "panels";
  return (
    <Panels
      className={
        "panels " +
        (theme.color === children.color ? theme.class : children.class)
      }
      theme={theme}
      color={children.color}
    />
  );
}
