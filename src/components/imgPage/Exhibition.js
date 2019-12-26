import React from "react";
import styled from "styled-components";
import Exhibition from "../exhibition.png";


const Style = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

export default () => {

  return (
    <Style>
      <Img src={Exhibition} alt={Exhibition} />
    </Style>
  );
};
