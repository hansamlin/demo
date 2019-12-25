import React from "react";
import styled from "styled-components";
import { theme, position } from "./theme";

const SubBackground = styled.div`
  height: 10px;
  width: calc(100vw / 4);
  background-color: ${props => props.theme.color};
  display: inline-block;
  bottom: 0;
  position: fixed;
  transform: ${props => props.position};
`;

const ContainerBottom = () => {
  return React.useMemo(
    () =>
      theme.map((item, index) => (
        <SubBackground
          key={index}
          theme={item}
          position={position[item.slider]}
        />
      )),
    []
  );
};

export default ContainerBottom;
