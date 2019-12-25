import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context";

const Style = styled.div`
  height: 606px;
  width: 100%;
  background-color: ${props => props.theme.color};
  position: absolute;
  left: 0;
  right: 0;
  top: 100vh;
  transition: top 1s ease-out;
`;

export default () => {
  const { currentTheme } = useContext(ThemeContext);

  return <Style theme={currentTheme}></Style>;
};
