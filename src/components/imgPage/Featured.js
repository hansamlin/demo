import React, { useState } from "react";
import styled from "styled-components";
import Featured from "../featured.png";
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
  height: 20rem;
  left: 45rem;
  top: 37.5rem;
`;

export default () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  const RenderRedirect = () => {
    if (redirect) {
      return <Redirect to="/art" />;
    }
  };
  return (
    <Style>
      {RenderRedirect()}
      <Link onClick={handleClick} />
      <Img src={Featured} alt={Featured} />
    </Style>
  );
};
