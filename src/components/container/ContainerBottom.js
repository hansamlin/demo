import React from "react";
import styled from "styled-components";
import { theme, position } from "./theme";

const SubBackground = styled.div`
  height: 10px;
  width: calc(100% / 4);
  background-color: ${props => props.theme.color};
  display: inline-block;
  position: relative;
  vertical-align: super;
`;

const Style = styled.div`
  height: 10px;
  width: 100%;
  bottom: 0;
  position: absolute;
  transform: ${props => props.position};
`;

const ContainerBottom = () => {
  return React.useMemo(
    () => (
      <Style className="ContainerBottom">
        {theme.map((item, index) => (
          <SubBackground
            key={index}
            theme={item}
            position={position[item.slider]}
          />
        ))}
      </Style>
    ),
    []
  );
};

export default ContainerBottom;
