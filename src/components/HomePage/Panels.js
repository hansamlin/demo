import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./theme-context";

const Panels = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: calc(100% / 3.6);
  z-index: 2;
`;

export default ({ children }) => {
  const { theme, setAction } = useContext(ThemeContext);

  const mouseEnter = React.useCallback(() => {
    if (theme.color !== children.color) {
      /**
       * prevAction
       * init
       * slider
       * fixNewColor
       */
      setTimeout(() => {
        setAction(prevAction => ({
          ...prevAction,
          class: "",
          init: false,
          slider: children.slider,
          fixNewColor: children.color
        }));
        setTimeout(() => {
          setAction(prevAction => ({
            ...prevAction,
            class: "active",
            theme: children,
            init: false,
            fixNewColor: children.color
          }));
        }, 400);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return React.useMemo(() => {
    return (
      <Panels
        onMouseEnter={mouseEnter}
        className="panels"
        color={children.color}
      />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
};
