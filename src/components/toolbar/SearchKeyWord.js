import React from "react";
import styled from "styled-components";

const Style = styled.div`
  width: 50%;
`;

const Span = styled.span`
  border: 1px;
  border-radius: 20px;
  width: 10rem;
`;

export default () => {
  return (
    <>
      <Style>
        <Span>您的特質是...</Span>
        <div>
          <p>勇於嘗試</p>
          <p>好奇寶寶</p>
          <p>初到旅客</p>
          <p>熱心助人</p>
        </div>
      </Style>
    </>
  );
};
