import React from "react";
import styled from "styled-components";
import Panels from "./Panels";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const panels = [
  { body: "#e02c7e", border: "#e5439a" },
  { body: "#12144e", border: "#3d439b" },
  { body: "#0083e5", border: "00aeef" }
];

export default function Wrapper() {
  return (
    <Div>
      {panels.map(item => {
        return <Panels key={item.body}>{item}</Panels>;
      })}
    </Div>
  );
}
