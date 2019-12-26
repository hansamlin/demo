import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../container/context";

const Style = styled.div`
  // height: 606px;
  width: 100%;
  background-color: ${props => props.theme.color};
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100vh + 606px);
`;

const Footer = styled.img`
  width: 100%;
  display: block;
`;

export default () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Style>
      <Footer src={currentTheme.background.footer} alt={currentTheme.slider} />
    </Style>
  );
};
