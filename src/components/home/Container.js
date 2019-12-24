import React, { useState, useContext, useReducer } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import Block from "./Block";
import { theme, position } from "./theme";
import PanelsWrapper from "./PanelsWrapper";
import BlockContent from "./BlockContent";

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
    position: fixed;
    touch-action: none;
    width: calc(100% - 20px);
    z-index: 1;
  }
`;

const reset = {
  blockTitle: {
    scale: "scale(0.6)"
  },
  blockHide: {
    height: 0,
    opacity: 0,
    transform: "translate3d(0, -70px, 0)"
  }
};

const blockReducer = (blockState, action) => {
  switch (action.type) {
    case "show":
      return {
        ...blockState,
        blockTitle: {
          scale: "scale(1)",
          transition:
            "transform 0.25s cubic-bezier(0.26,0.88,0.57,0.9) 0.5s,color 0.25s cubic-bezier(0.26,0.88,0.57,0.9);"
        },
        blockHide: {
          height: "auto",
          opacity: 1,
          transform: "translate3d(0, 0, 0)"
        }
      };
    case "reset":
      return reset;
    default:
      throw new Error();
  }
};

const initReducer = {
  blockTitle: {
    scale: "scale(1)",
    transition:
      "transform 0.75s cubic-bezier(0.26,0.88,0.57,0.9) 0.5s,color 0.25s cubic-bezier(0.26,0.88,0.57,0.9);"
  },
  blockHide: {
    height: "auto",
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  }
};

export default () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  const [visible, setVisible] = useState(0.4);
  const [blockState, dispatch] = useReducer(blockReducer, initReducer);

  const useVisibleEffect = (visible, currentTheme) => {
    const didMountRef = React.useRef(false);
    React.useEffect(() => {
      if (didMountRef.current) {
        visible();
      } else {
        didMountRef.current = true;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);
  };

  useVisibleEffect(() => {
    setVisible(1);
  }, currentTheme);

  const blockStatic = React.useMemo(() => {
    return theme.map((item, index) => {
      const handleMouseEnter = () => {
        if (currentTheme.color !== item.color) {
          setTheme(item);
          dispatch({ type: "reset" });
        }
      };

      return (
        <Block
          key={index}
          position={position[item.slider]}
          onMouseEnter={handleMouseEnter}
          top="10px"
          left="10px"
          visible={1}
          zindex={5}
        >
          <BlockContent
            note={item}
            key={index}
            blockTitle={
              currentTheme.color !== item.color
                ? reset.blockTitle
                : blockState.blockTitle
            }
            blockHide={
              currentTheme.color !== item.color
                ? reset.blockHide
                : blockState.blockHide
            }
          />
        </Block>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockState]);

  return React.useMemo(() => {
    const handleTransitionEnd = () => {
      setVisible(0.6);
      dispatch({ type: "show" });
    };
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
          visible={visible}
          theme={currentTheme}
          onTransitionEnd={handleTransitionEnd}
        />
      </Container>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme, visible]);
};
