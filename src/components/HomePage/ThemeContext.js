import React, { useEffect } from "react";
import Container from "./Container";
import video from "../loop_home.mp4";
import { ThemeContext } from "./theme-context";

const initTheme = {
  color: "#3d439b",
  background: {
    type: "video",
    item: video
  },
  slider: "center"
};

const useVisibleEffect = (SetVisible, currentTheme) => {
  const didMountRef = React.useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      SetVisible();
    } else {
      didMountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);
};

export default () => {
  const [currentTheme, setTheme] = React.useState(initTheme);
  const [visible, setVisible] = React.useState(0.4);

  const SetVisible = () => {
    setVisible(1);
  };

  useVisibleEffect(SetVisible, currentTheme);

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme, visible, setVisible }}
    >
      <Container />
    </ThemeContext.Provider>
  );
};
