import React from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import video from "./components/loop_home.mp4";
// import { theme } from "./components/HomePage/theme";
import ThemeContextProvider from "./components/HomePage/ThemeContext";

// const GlobalStyle = createGlobalStyle`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
// }
// `;

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;

//   &:before {
//     background: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0.35) 0%,
//       transparent 100%
//     );
//     content: "";
//     height: 330px;
//     top: 10px;
//     left: 10px;
//     opacity: 1;
//     pointer-events: none;
//     position: absolute;
//     touch-action: none;
//     width: calc(100% - 20px);
//     z-index: 1;
//   }
// `;

// const Panels = styled.div`
//   opacity: ${({ current, color }) => (current.color === color ? 1 : 0)};
//   transition: all 1000ms ease-in-out;
//   border: 10px solid ${({ color }) => color};
//   height: 100vh;
//   width: 100vw;
//   position: fixed;
// `;

// const Image = styled.div`
//   background-image: ${props => props.theme.background.item};
//   background-size: cover;
//   height: 100%;
//   width: 100%;
// `;

// const Video = styled.video`
//   position: fixed;
//   height: calc(100vh - 20px);
//   width: calc(100vw - 20px);
//   object-fit: cover;
// `;

// const Background = ({ theme }) => {
//   return theme.background.type === "img" ? (
//     <Image theme={theme} />
//   ) : (
//     <Video>
//       <source src={theme.background.item} type="video/mp4" />
//     </Video>
//   );
// };

// const Block = styled.div`
//   position: absolute;
//   width: calc((100vw - 20px) / 3.6);
//   height: calc(100vh - 20px);
//   top: ${props => (props.static ? "10px" : 0)};
//   left: ${props => (props.static ? "10px" : 0)};
//   transition: ${({ animation }) => animation && "all 400ms ease-in-out"};
//   transform: ${({ position }) => position};
//   background-color: ${props => props.theme.color};

//   opacity: ${props => props.opacity};
//   mix-blend-mode: hard-light;
// `;

// const initTheme = {
//   color: "#3d439b",
//   background: {
//     type: "video",
//     item: video
//   },
//   slider: "center"
// };

// const vWidth = "(100vw - 20px)";
// const blockWidth = `(${vWidth} / 3.6)`;
// const space = `(${vWidth} - (${blockWidth} * 3))`;
// const center = `translate(calc(${blockWidth} + (${space} / 2)), 0)`;
// const right = `translate(calc((${blockWidth} * 2) + (${space} / 2) * 2), 0)`;

// const position = {
//   left: "translate(0, 0)",
//   center: center,
//   right: right
// };

// const PanelsWrapper = ({ item, current }) => {
//   const inner = React.useMemo(() => {
//     return (
//       <>
//         <Background theme={item} />
//         <Block
//           position={position[current.slider]}
//           static={false}
//           animation={false}
//           opacity={item.color === current.color ? 0.6 : 0}
//           theme={current}
//         />
//       </>
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [current]);

//   return (
//     <Panels color={item.color} current={current}>
//       {inner}
//     </Panels>
//   );
// };

const App = () => {
  // const [currentTheme, setTheme] = React.useState(initTheme);

  // const blockStatic = React.useMemo(() => {
  //   return theme.map((item, index) => (
  //     <Block
  //       key={index}
  //       position={position[item.slider]}
  //       onMouseEnter={() => setTheme(item)}
  //       static={true}
  //       opacity={0}
  //     />
  //   ));
  // }, []);

  // const memoContainer = React.useMemo(() => {
  //   return (
  //     <Container className="App">
  //       {theme.map((item, index) => (
  //         <PanelsWrapper item={item} current={currentTheme} key={index} />
  //       ))}
  //       {blockStatic}
  //       <Block
  //         position={position[currentTheme.slider]}
  //         static={true}
  //         animation={true}
  //         opacity={0.4}
  //         theme={currentTheme}
  //       />
  //     </Container>
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentTheme]);

  return (
    <>
      {/* <GlobalStyle /> */}
      {/* {memoContainer} */}
      <ThemeContextProvider />
    </>
  );
};

export default App;
