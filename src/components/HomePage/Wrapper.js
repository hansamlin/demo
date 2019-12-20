import React, { useContext } from "react";
import styled from "styled-components";
import Panels from "./Panels";
import { ThemeContext } from "./theme-context";

const divBackGround = ({ background }) =>
  background.type === "img" && background.item;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  z-index: 10;
  background-image: ${divBackGround};
  background-size: cover;
  transition: opacity 500ms ease-in-out;

  &.active:after {
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: black;
    left: 10px;
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    transition: opacity 500ms ease-in-out;
    opacity: 1;
  }

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 100%
    );
    content: "";
    display: block;
    height: 330px;
    margin-top: 10px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    top: 0;
    touch-action: none;
    transition: opacity 0.35s ease-out;
    width: calc(100% - 20px);
    z-index: 50;
  }
`;

const zIndexTheme = ({ theme }) =>
  theme.background.type === "video" ? "1" : "-1";

const DivVideo = styled.div`
  position: fixed;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  z-index: ${zIndexTheme};
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: opacity 500ms ease-in-out;
  opacity: 0;

  &.active {
    transition: opacity 500ms ease-in-out;
    opacity: 1;
  }
`;

const Space = styled.div`
  display: inline-block;
  width: calc((100% - ((100% / 3.6) * 3)) / 2);
`;

const width = "(100vw - 20px)";
const divWidth = `(${width} / 3.6)`;

const Slider = styled.div`
  z-index: 3;
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
    <Wrapper
      background={theme.background}
      className={theme.background.type === "img" && theme.class}
    >
      <DivVideo theme={theme}>
        <Video
          className={theme.color === "#3d439b" && theme.class}
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={theme.background.item} type="video/mp4" />
        </Video>
      </DivVideo>
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
      {console.log(theme.fixColor)}
      <Slider left={position} color={theme.fixColor} />
    </Wrapper>
  );
};
