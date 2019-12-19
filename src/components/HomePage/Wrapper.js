import React from "react";
import styled from "styled-components";
import Panels from "./Panels";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import sumeitse from "../sumeitse.jpg";
import zorn from "../zorn.jpg";
import video from "../loop_home.mp4";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-image: ${({ background }) =>
    background.type === "img" && background.item};
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;

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

const DivVideo = styled.div`
  position: fixed;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  z-index: ${({ theme }) => (theme.background.type === "video" ? "1" : "-1")};
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const panels = [
  {
    color: "#e5439a",
    background: {
      type: "img",
      item: `url("${zorn}")`
    }
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: `${video}`
    }
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    }
  }
];

export default function Wrapper({ theme, setTheme }) {
  React.useEffect(() => {
    const mouseenter$ = fromEvent(
      document.querySelectorAll(".panels"),
      "mouseenter"
    )
      .pipe(
        map(e =>
          panels.find(obj => obj.color === e.target.getAttribute("color"))
        )
      )
      .subscribe(theme => setTheme(theme));

    return () => mouseenter$.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background background={theme.background}>
      <DivVideo theme={theme}>
        <Video autoPlay loop muted preload="auto">
          <source src={theme.background.item} type="video/mp4" />
        </Video>
      </DivVideo>
      {panels.map(item => {
        return (
          <Panels theme={theme} key={item.color}>
            {item}
          </Panels>
        );
      })}
    </Background>
  );
}
