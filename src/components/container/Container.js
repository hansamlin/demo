import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";
import Toolbar from "../toolbar/Toolbar";
import Block from "../block/Block";
import { theme, position, vHeight, vWidth } from "./theme";
import Background from "../background/Background";
import Title from "../museum-name/Title";
import BlockContent from "../block/BlockContent";

const Container = styled.div`
  height: ${vHeight};
  width: ${vWidth};

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35) 0%,
      transparent 100%
    );
    content: "";
    height: 30vh;
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: none;
    position: fixed;
    touch-action: none;
    width: ${vWidth};
    z-index: 1;
  }
`;

const TitleContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 52vh;
`;

const Logo = styled.div`
  width: 15vw;
  height: 5.5vh;
  position: absolute;
  background-color: ${props => props.theme.color};
  top: 2.2vh;
  left: 5vw;
`;

const Round = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color};
  width: 100%;
  height: 50%;
  bottom 50%;
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const Rectangle = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color};
  width: 100%;
  height: 50%;
  bottom: 0;
`;

// const reset = {
//   blockTitle: {
//     scale: "scale(0.6)"
//   },
//   blockHide: {
//     height: 0,
//     opacity: 0,
//     transform: "translate3d(0, -70px, 0)"
//   }
// };

// const blockReducer = (blockState, action) => {
//   switch (action.type) {
//     case "show":
//       return {
//         ...blockState,
//         blockTitle: {
//           scale: "scale(1)",
//           transition:
//             "transform 0.25s cubic-bezier(0.26,0.88,0.57,0.9) 0.5s,color 0.25s cubic-bezier(0.26,0.88,0.57,0.9);"
//         },
//         blockHide: {
//           height: "auto",
//           opacity: 1,
//           transform: "translate3d(0, 0, 0)"
//         }
//       };
//     case "reset":
//       return reset;
//     default:
//       throw new Error();
//   }
// };

// const initReducer = {
//   blockTitle: {
//     scale: "scale(1)",
//     transition:
//       "transform 0.75s cubic-bezier(0.26,0.88,0.57,0.9) 0.5s,color 0.25s cubic-bezier(0.26,0.88,0.57,0.9);"
//   },
//   blockHide: {
//     height: "auto",
//     opacity: 1,
//     transform: "translate3d(0, 0, 0)"
//   }
// };

export default () => {
  const { currentTheme, setTheme } = useContext(ThemeContext);

  // const [visible, setVisible] = useState(0.4);
  // const [blockState, dispatch] = useReducer(blockReducer, initReducer);

  // const useVisibleEffect = (visible, currentTheme) => {
  //   const didMountRef = React.useRef(false);
  //   React.useEffect(() => {
  //     if (didMountRef.current) {
  //       visible();
  //     } else {
  //       didMountRef.current = true;
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [currentTheme]);
  // };

  // useVisibleEffect(() => {
  //   setVisible(1);
  // }, currentTheme);

  const BlockStatic = React.useMemo(() => {
    return theme.map((item, index) => {
      return (
        <Block
          key={index}
          position={position[item.slider]}
          onMouseEnter={() => setTheme(item)}
          visible={1}
          zindex={5}
        >
          <BlockContent
            note={item}
            key={index}
            // blockTitle={
            //   currentTheme.color !== item.color
            //     ? reset.blockTitle
            //     : blockState.blockTitle
            // }
            // blockHide={
            //   currentTheme.color !== item.color
            //     ? reset.blockHide
            //     : blockState.blockHide
            // }
          />
        </Block>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.useMemo(() => {
    // const handleTransitionEnd = () => {
    //   setVisible(0.6);
    //   // dispatch({ type: "show" });
    // };
    return (
      <Container className="App">
        <Toolbar />
        <TitleContainer>
          <Logo theme={currentTheme} />
          {theme.map((item, index) => (
            <Title
              key={index}
              slider={item.slider}
              zh={item.block.title}
              en={item.block.enTitle}
            />
          ))}
        </TitleContainer>
        {theme.map((item, index) => (
          <Background item={item} current={currentTheme} key={index} />
        ))}
        {BlockStatic}
        <Block
          position={position[currentTheme.slider]}
          animation={true}
          visible={1}
          // onTransitionEnd={handleTransitionEnd}
        >
          <Round theme={currentTheme} />
          <Rectangle theme={currentTheme} />
        </Block>
      </Container>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);
};
