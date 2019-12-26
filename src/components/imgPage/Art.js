import React from "react";
import styled from "styled-components";
import Art from "../art.png";

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
      <Img src={Art} alt={Art} />
    </Style>
  );
};
