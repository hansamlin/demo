import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../container/theme";
import Block from "./Block";
import { ThemeContext } from "../container/context";
// import { fromEvent } from "rxjs";
// import { map } from "rxjs/operators";

const BlockStaticStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const BlockStatic = () => {
  const { setTheme } = useContext(ThemeContext);

  // React.useEffect(() => {
  //   const domBlock = document.querySelectorAll(".block");

  //   const source$ = fromEvent(domBlock, "mouseenter");
  //   const subscription$ = source$
  //     .pipe(
  //       map(e => e.target.id),
  //       map(id =>
  //         theme.find(item => {
  //           return item.slider === parseInt(id);
  //         })
  //       )
  //     )
  //     .subscribe(item => setTheme(item));

  //   return () => subscription$.unsubscribe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
              className="block"
              id={item.slider}
            />
          );
        })}
      </BlockStaticStyle>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default BlockStatic;
