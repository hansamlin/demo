import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: calc(100vw / 4);
  display: inline-block;
  text-align: center;
  color: white;
  position: relative;
  top: calc(44%);
`;

const Zh = styled.div`
  font-size: 1.8vw;
`;
const En = styled.div`
  font-size: 1vw;
`;

export default ({ zh, en, slider }) => {
  return (
    <Title>
      <Zh>{zh}</Zh>
      <En>{en}</En>
    </Title>
  );
};
