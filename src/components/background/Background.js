import React from "react";
import styled from "styled-components";
import { vHeight, vWidth } from "../container/theme";

const Image = styled.div`
  background-image: ${props => props.theme.background.item};
  background-size: cover;
  height: ${vHeight};
  width: ${vWidth};
  left: 0;
  right: 0;
  top: 0;
`;

const Background = ({ theme }) => {
  return <Image theme={theme} />;
};

const Panels = styled.div`
  opacity: ${({ current, panelsColor }) =>
    current.color === panelsColor ? 1 : 0};
  transition: all 1000ms ease-in-out;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: black;
  left: 0;
  right: 0;
  top: 0;
`;

const PanelsWrapper = ({ item, current }) => {
  return (
    <>
      <Panels panelsColor={item.color} current={current}>
        <Background theme={item} />
      </Panels>
    </>
  );
};

export default PanelsWrapper;
