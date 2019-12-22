import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";

const divBackGround = ({ background }) =>
  background.type === "img" && background.item;

const Panels = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: calc(100% / 3.6);
  z-index: 2;

  &:hover ~ div.background {
    background-image: ${divBackGround};
  }

  &:hover ~ div.background > video {
    opacity: ${({ background }) => (background.type === "img" ? 0 : 1)};
  }
`;

export default ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const mouseEnter = React.useCallback(() => {
    if (theme.color !== children.color) {
      /**
       * prevAction
       * init
       * slider
       * fixNewColor
       */
      // setTimeout(() => {
        setTheme(children);
      // }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return React.useMemo(() => {
    return (
      <Panels
        onMouseEnter={mouseEnter}
        className="panels"
        background={children.background}
        color={children.color}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
};
