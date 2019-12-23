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
  opacity: ${({ current, color }) => (current.color === color ? 1 : 0)};
  transition: all 1000ms ease-in-out;
  border: 10px solid ${({ color }) => color};
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  position: fixed;
`;

const PanelsWrapper = ({ item, current }) => {
  const inner = React.useMemo(() => {
    return (
      <>
        <Background theme={item} />
        <Block
          position={position[current.slider]}
          static={false}
          animation={false}
          opacity={item.color === current.color ? 0.6 : 0}
          theme={current}
        />
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <Panels color={item.color} current={current}>
      {inner}
    </Panels>
  );
};

export default PanelsWrapper;
