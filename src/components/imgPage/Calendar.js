import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../calendar.png";
import { Redirect } from "react-router-dom";

const Style = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Link = styled.div`
  position: absolute;
  width: 29.5rem;
  height: 35rem;
  left: 15rem;
  top: 37rem;
`;

export default () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  const RenderRedirect = () => {
    if (redirect) {
      return <Redirect to="/exhibition" />;
    }
  };

  return (
    <Style>
      {RenderRedirect()}
      <Link onClick={handleClick} />
      <Img src={Calendar} alt={Calendar} />
    </Style>
  );
};
