import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../container/theme-context";

const Style = styled.div`
  display: inline-block;
  height: 64px;
  vertical-align: middle;
  margin-right: 40px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: 0;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  top: 25%;
  height: 36.74px;
`;

const Line = styled.div`
  width: 2.34vw;
  min-width: 45px;
  height: 7px;
  background: ${props => props.theme.color};
  border-radius: 10px;
`;

export default () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Style>
      <Button>
        <Line theme={{ color: currentTheme.color }} />
        <Line theme={{ color: "#ffffff" }} />
        <Line theme={{ color: "#ffffff" }} />
      </Button>
    </Style>
  );
};
