import React from "react";
import styled from "styled-components";

const Panels = styled.div`
  display: inline-block;
  height: 100%;
  width: calc(100% / 3);
  background: ${props => props.color};
  opacity: 0.9;
`;

export default function Context({ children }) {
  return React.useMemo(() => {
    return <Panels className="panels" color={children.body} />;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
