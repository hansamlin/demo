import React, { useState } from "react";
import Container from "./Container";
import zorn from "../zorn.jpg";
import { ThemeContext } from "./context";
import Info from "./Info";

const initTheme = {
  color: "rgba(229, 22, 128, 0.88)",
  background: {
    type: "img",
    item: `url(${zorn})`
  },
  slider: 1
};

export default () => {
  const [currentTheme, setTheme] = useState(initTheme);
  const [show, setShow] = useState({
    search: { scale: 1, opacity: 1, cursor: "pointer" },
    close: "close"
  });

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, show, setShow }}>
      <div>
        <Container />
        <Info />
      </div>
    </ThemeContext.Provider>
  );
};
