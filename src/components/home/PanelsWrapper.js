import React from "react";
import styled from "styled-components";
// import Block from "./Block";
import { vHeight, vWidth  } from "./theme";

const Image = styled.div`
  background-image: ${props => props.theme.background.item};
  background-size: cover;
  height: ${vHeight};
  width: ${vWidth};
`;

const Video = styled.video`
  position: fixed;
  height: ${vHeight};
  width: ${vWidth};
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
  // border: 10px solid ${({ panelsColor }) => panelsColor};
  height: 100vh
  width: 100vw
  position: fixed;
`;

const PanelsWrapper = ({ item, current }) => {
  return (
    <Panels panelsColor={item.color} current={current}>
      <Background theme={item} />
      {/* <Block
        position={position[item.slider]}
        top="0"
        left="0"
        animation={false}
        visible={item.color === current.color ? 1 : 0}
        theme={item}
      /> */}
    </Panels>
  );
};

export default PanelsWrapper;
