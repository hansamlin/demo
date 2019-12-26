import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Style = styled.div`
  width: 50%;
  position: relative;
  opacity: 0;
  transition: opacity 0.6s ease-in-out 0.1s;

  &.open {
    opacity: 1;
  }
`;

const Select = styled.div`
  border: 1px solid #000000;
  border-radius: 3rem;
  width: 30rem;
  height: 4rem;
  display: block;
  margin-left: calc(50% - 10rem);
  line-height: 4rem;
  font-size: 2.5rem;
  position: absolute;
  top: calc(50% - 4rem);
  cursor: pointer;
`;

const Block = styled.div`
  width: 24rem;
  margin-left: calc(50% - 7rem);
  height: 12rem;
  z-index: 1;
  transition: transform 0.4s ease-out;
  background: #ffffff;
  position: absolute;
  top: calc(50% + 1.5rem);
  transform: translateY(0);

  &.open {
    transform: translateY(12rem);
  }
`;

const Option = styled.div`
  width: 24rem;
  margin-left: calc(50% - 7rem);
  position: absolute;
  top: calc(50% + 1.5rem);
`;

const OptionText = styled.p`
  background: #414141;
  color: #ffffff;
  height: 3rem;
  line-height: 3rem;
  font-size: 2rem;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background: #e51680;
  }
`;

export default ({ toggle, setToggle, show }) => {
  let className = toggle === true ? "open" : "close";
  console.log(show);
  const [redirectFeatured, setRedirectFeatured] = useState(false);
  const [redirectCalendar, setRedirectCalendar] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const handleFeatured = () => {
    setRedirectFeatured(true);
  };

  const handleCalendar = () => {
    setRedirectCalendar(true);
  };

  const RedirectFeatured = () => {
    if (redirectFeatured) {
      return <Redirect to="/featured" />;
    }
  };

  const RedirectCalendar = () => {
    if (redirectCalendar) {
      return <Redirect to="/calendar" />;
    }
  };

  return (
    <Style className={show.close.opacity === 1 && "open"}>
      {RedirectFeatured()}
      {RedirectCalendar()}
      <Select onClick={handleToggle}>您的特質是...</Select>
      <Block className={className} />
      <Option>
        <OptionText onClick={handleFeatured}>勇於嘗試</OptionText>
        <OptionText onClick={handleCalendar}>好奇寶寶</OptionText>
        <OptionText>初到旅客</OptionText>
        <OptionText>熱心助人</OptionText>
      </Option>
    </Style>
  );
};
