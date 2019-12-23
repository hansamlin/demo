import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import Block from "./Block";
import { theme, position } from "./theme";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 100%
    );
    content: "";
    height: 330px;
    top: 10px;
    left: 10px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    touch-action: none;
    width: calc(100% - 20px);
    z-index: 1;
  }
`;

const Panels = styled.div`
  opacity: ${({ current, color }) => (current.color === color ? 1 : 0)};
  transition: all 1000ms ease-in-out;
  border: 10px solid ${({ color }) => color};
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  position: fixed;
`;

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

function Background({ theme }) {
  return theme.background.type === "img" ? (
    <Image theme={theme} />
  ) : (
    <Video>
      <source src={theme.background.item} type="video/mp4" />
    </Video>
  );
}
export default () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  function PanelsWrapper({ item, current }) {
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
  }

  const blockStatic = React.useMemo(() => {
    return theme.map((item, index) => (
      <Block
        key={index}
        position={position[item.slider]}
        onMouseEnter={() => setTheme(item)}
        static={true}
        opacity={0}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memoContainer = React.useMemo(() => {
    return (
      <Container className="App">
        {theme.map((item, index) => (
          <PanelsWrapper item={item} current={currentTheme} key={index} />
        ))}
        {blockStatic}
        <Block
          position={position[currentTheme.slider]}
          static={true}
          animation={true}
          opacity={0.4}
          theme={currentTheme}
        />
      </Container>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return memoContainer;
};
