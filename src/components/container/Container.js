import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context";
import Toolbar from "../toolbar/Toolbar";
import Block from "../block/Block";
import { theme, position, vHeight, vWidth } from "./theme";
import Background from "../background/Background";
import Title from "../museum-name/Title";
import ContainerBottom from "./ContainerBottom";
import BlockContext from "./BlockContext";
import LogoWhite from "../logo_1.png";
import LogoBlack from "../logo.png";
import SearchPup from "../toolbar/SearchPup";

const Container = styled.div`
  height: ${vHeight};
  width: ${vWidth};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

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
    right: 0;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    touch-action: none;
    width: ${vWidth};
    z-index: 1;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 52vh;
`;

const Logo = styled.div`
  width: 15vw;
  height: 5.5vh;
  position: fixed;
  background-color: ${props => props.theme.color};
  top: 2.2vh;
  left: 5vw;
  z-index: 20;
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

export default () => {
  const { currentTheme, setTheme, show } = useContext(ThemeContext);

  const BlockStaticStyle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  `;

  const BlockStatic = React.useMemo(() => {
    return (
      <BlockStaticStyle className="mousehover">
        {theme.map((item, index) => {
          return (
            <Block
              key={index}
              position="relative"
              onMouseEnter={() => setTheme(item)}
              visible={0}
              zindex={5}
            />
          );
        })}
      </BlockStaticStyle>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.useMemo(() => {
    return (
      <Container className="App">
        <Logo>
          <img src={show.close === "open" ? LogoBlack : LogoWhite} alt="Logo" />
        </Logo>

        <Toolbar />
        <SearchPup />

        <TitleContainer className="TitleContainer">
          {theme.map((item, index) => (
            <Title
              key={index}
              slider={item.slider}
              zh={item.block.title}
              en={item.block.enTitle}
            />
          ))}
        </TitleContainer>

        {/* 背景 */}
        {theme.map((item, index) => (
          <Background item={item} current={currentTheme} key={index} />
        ))}

        {/* mousehover */}
        {BlockStatic}

        {/* BlockContent */}
        <BlockContext />

        {/* 輔色 */}
        <ContainerBottom />

        {/* 滑動區塊 */}
        <Block
          position="absolute"
          animation={true}
          visible={1}
          theme={{ bottom: 0, transform: position[currentTheme.slider] }}
          className="floatBlock"
        >
          <Round theme={currentTheme} />
          <Rectangle theme={currentTheme} />
        </Block>
      </Container>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme, show]);
};
