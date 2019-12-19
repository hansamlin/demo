import React from "react";
import styled from "styled-components";

const Panels = styled.div`
  display: inline-block;
  position: relative;
  height: 100%;
  width: calc(100% / 3);
  background: ${props => props.theme.color === props.color && props.color};
  opacity: ${props => (props.theme.color === props.color ? "0.4" : "1")};
  z-index: 2;
`;

export default function Context({ theme, children }) {
  return <Panels className="panels" theme={theme} color={children.color} />;
}
