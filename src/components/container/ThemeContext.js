import React from "react";
import Container from "./Container";
import zorn from "../zorn.jpg";
import { ThemeContext } from "./context";

const initTheme = {
  color: "rgba(229, 22, 128, 0.88)",
  background: {
    type: "img",
    item: `url(${zorn})`
  },
  slider: 1
};

export default () => {
  const [currentTheme, setTheme] = React.useState(initTheme);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <Container />
    </ThemeContext.Provider>
  );
};
