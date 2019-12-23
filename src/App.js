import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import sumeitse from "./components/sumeitse.jpg";
import zorn from "./components/zorn.jpg";
import video from "./components/loop_home.mp4";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Panels = styled.div`
  opacity: ${({ current, color }) => (current.color === color ? 1 : 0)};
  transition: opacity 1000ms ease-in-out .35s;
  border: 10px solid ${({ color }) => color};
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

const Image = styled.div`
  background-image: ${props => props.theme.background.item};
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const Video = styled.video`
  position: fixed;
  height: 100%;
  width: 100%;
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

const Block = styled.div`
  position: absolute;
  width: calc(100% / 3.6);
  height: calc(100vh - 20px);
  top: ${props => (props.static ? "10px" : 0)};
  left: ${props => (props.static ? "10px" : 0)};
  transform: ${({ position }) => position};
`;

const initTheme = {
  color: "#3d439b",
  background: {
    type: "video",
    item: video
  },
  slider: "center"
};

const theme = [
  {
    color: "#e5439a",
    background: {
      type: "img",
      item: `url("${zorn}")`
    },
    slider: "left"
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: video
    },
    slider: "center"
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: "right"
  }
];

const vWidth = "(100vw - 20px)";
const blockWidth = `(${vWidth} / 3.6)`;

const position = {
  left: "translate(0, 0)",
  center: `translate(calc(${blockWidth} + ((${vWidth} - (${blockWidth} * 3)) / 2)), 0)`,
  right: `translate(calc((${blockWidth} * 2) + ((${vWidth} - (${blockWidth} * 3)) / 2) * 2), 0)`
};

const PanelsWrapper = ({ item, current }) => {
  return React.useMemo(
    () => (
      <Panels color={item.color} current={current}>
        <Background theme={item} />
        <Block theme={item} position={position[item.slider]} static={false} />
      </Panels>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current]
  );
};

const App = () => {
  const [currentTheme, setTheme] = React.useState(initTheme);
  console.log(currentTheme);

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        {theme.map((item, index) => (
          <PanelsWrapper item={item} current={currentTheme} key={index} />
        ))}
        {theme.map((item, index) => (
          <Block
            key={index}
            position={position[item.slider]}
            onMouseEnter={() => setTheme(item)}
            static={true}
          />
        ))}
      </Container>
    </>
  );
};

export default App;
