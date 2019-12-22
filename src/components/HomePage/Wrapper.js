import React, { useContext } from "react";
import styled from "styled-components";
import Panels from "./Panels";
import { ThemeContext } from "./theme-context";

const Wrapper = styled.div`
  position: absolute;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  object-fit: cover;
  top: 10px;
  z-index: 1;
  background-size: cover;
  transition: opacity 400ms ease-in-out;
  background-image: ${({ background }) =>
    background.type === "img" && background.item};

  &:after {
    content: "";
    position: absolute;
    background-color: black;
    left: 0;
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    transition: opacity 1000ms ease-in-out;
    opacity: ${({ background }) => (background.type === "img" ? 0 : 1)};
  }
`;

const Video = styled.video`
  position: fixed;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  object-fit: cover;
  transition: opacity 1000ms ease-in-out;
  opacity: ${({ background }) => (background.type === "img" ? 0 : 1)};
  z-index: 1;
`;

const Space = styled.div`
  display: inline-block;
  width: calc((100% - ((100% / 3.6) * 3)) / 2);
`;

const width = "(100vw - 20px)";
const divWidth = `(${width} / 3.6)`;

const Slider = styled.div`
  z-index: 0;
  background: ${({ color }) => color};
  position: fixed;
  width: calc(${divWidth});
  height: calc(100vh - 20px);
  top: 10px;
  transition: transform 300ms ease-in-out;
  transform: ${({ left }) => left};
  opacity: 0.4;
`;

export default ({ panels }) => {
  const { theme, position } = useContext(ThemeContext);

  return (
    <>
      {panels.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && <Space key={index} />}
            <Panels theme={theme} key={item.color}>
              {item}
            </Panels>
          </React.Fragment>
        );
      })}
      <Wrapper background={theme.background} className="background">
        <Video
          background={theme.background}
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={theme.background.item} type="video/mp4" />
        </Video>
      </Wrapper>
      <Slider left={position} color={theme.fixColor} />
    </>
  );
};
