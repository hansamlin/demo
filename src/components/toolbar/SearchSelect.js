import React from "react";
import styled from "styled-components";

const Style = styled.div`
  width: 50%
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Select = styled.div`
  border: 1px solid #000000;
  border-radius: 3rem;
  width: 20rem;
  height: 3rem;
  display: block;
  margin-left: calc(50% - 10rem);
  line-height: 3rem;
  font-size: 1.5rem;
  text-align: center;
`;

const Option = styled.div`
  position: absolute;
  top: 50vh;
`;

export default () => {
  return (
    <>
      <Style>
        <Select>您的特質是...</Select>
        <Option>
          <p>勇於嘗試</p>
          <p>好奇寶寶</p>
          <p>初到旅客</p>
          <p>熱心助人</p>
        </Option>
      </Style>
    </>
  );
};
