import React from "react";
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

export default () => {
  const [currentTheme, setTheme] = React.useState(initTheme);

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme }}
    >
      <Container />
    </ThemeContext.Provider>
  );
};
