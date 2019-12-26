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
`;

const Index = styled.img`
  width: 100%;
  display: block;
`;

export default () => {
  const { currentTheme } = useContext(ThemeContext);
  
  return (
    <Style theme={currentTheme}>
      <Index src={currentTheme.background.index} alt={currentTheme.slider} />
    </Style>
  );
};
