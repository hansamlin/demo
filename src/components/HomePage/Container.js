import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import Block from "./Block";
import { theme, position } from "./theme";
import PanelsWrapper from "./PanelsWrapper";

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

export default () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  const [visible, setVisible] = React.useState(0.4);

  const useVisibleEffect = (SetVisible, currentTheme) => {
    const didMountRef = React.useRef(false);
    React.useEffect(() => {
      if (didMountRef.current) {
        SetVisible();
      } else {
        didMountRef.current = true;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);
  };

  const SetVisible = () => {
    setVisible(1);
  };

  useVisibleEffect(SetVisible, currentTheme);

  const blockStatic = React.useMemo(() => {
    return theme.map((item, index) => (
      <Block
        key={index}
        position={position[item.slider]}
        onMouseEnter={() => setTheme(item)}
        top="10px"
        left="10px"
        opacity={0}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.useMemo(() => {
    return (
      <Container className="App">
        {theme.map((item, index) => (
          <PanelsWrapper item={item} current={currentTheme} key={index} />
        ))}
        {blockStatic}
        <Block
          position={position[currentTheme.slider]}
          left="10px"
          top="10px"
          animation={true}
          opacity={visible}
          theme={currentTheme}
          onTransitionEnd={() => setVisible(0.6)}
        />
      </Container>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme, visible]);
};
