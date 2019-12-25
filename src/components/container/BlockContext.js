import React, { useContext } from "react";
import { BlockContext } from "./context";
import BlockContent from "../block/BlockContent";
import { theme } from "./theme";
import { ThemeContext } from "./context";

export default () => {
  const { currentTheme } = useContext(ThemeContext);

  return theme.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <BlockContext.Provider
          value={{
            today: item.block.today,
            ing: item.block.ing,
            soon: item.block.soon,
            color: item.color,
            slider: item.slider,
            current: currentTheme.color
          }}
        >
          <BlockContent />
        </BlockContext.Provider>
      </React.Fragment>
    );
  });
};
