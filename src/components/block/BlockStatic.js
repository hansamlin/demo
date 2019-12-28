import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../container/theme";
import Block from "./Block";
import { ThemeContext } from "../container/context";

const BlockStaticStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BlockStatic = () => {
  const { setTheme } = useContext(ThemeContext);

  return React.useMemo(() => {
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
};

export default BlockStatic;
