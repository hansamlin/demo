import React from "react";
import styled from "styled-components";
import Block from "./Block";
import { position } from "./theme";

const Image = styled.div`
  background-image: ${props => props.theme.background.item};
  background-size: cover;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
`;

const Video = styled.video`
  position: fixed;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  object-fit: cover;
`;

const Background = ({ theme }) => {
  return theme.background.type === "img" ? (
    <Image theme={theme} />
  ) : (
    <Video>
      <source src={theme.background.item} type="video/mp4" />
    </Video>
  );
};

const Panels = styled.div`
  opacity: ${({ current, panelsColor }) =>
    current.color === panelsColor ? 1 : 0};
  transition: all 1000ms ease-in-out;
  border: 10px solid ${({ panelsColor }) => panelsColor};
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  position: fixed;
`;

const PanelsWrapper = ({ item, current }) => {
  return (
    <Panels panelsColor={item.color} current={current}>
      <Background theme={item} />
      <Block
        position={position[current.slider]}
        top="0"
        left="0"
        animation={false}
        visible={item.color === current.color ? 1 : 0}
        theme={current}
      />
    </Panels>
  );
};

export default PanelsWrapper;
