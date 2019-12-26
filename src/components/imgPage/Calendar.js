import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../calendar.png";
import { Redirect } from "react-router-dom";
import Search from "../toolbar/Search";
import SearchPup from "../toolbar/SearchPup";
import { ThemeContext } from "../container/context";
import Logo from "./Logo";

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
  cursor: pointer;
`;

export default () => {
  const [redirect, setRedirect] = useState(false);

  const [show, setShow] = useState({
    search: { scale: 1, opacity: 1, cursor: "pointer" },
    close: { opacity: 0, zIndex: 0 }
  });

  const handleClick = () => {
    setRedirect(true);
  };

  const RenderRedirect = () => {
    if (redirect) {
      return <Redirect to="/exhibition" />;
    }
  };

  const img = { img: true };

  return (
    <Style>
      {RenderRedirect()}
      <Logo show={show} />
      <ThemeContext.Provider value={{ show, setShow, img }}>
        <Search />
        <SearchPup />
      </ThemeContext.Provider>
      <Link onClick={handleClick} />
      <Img src={Calendar} alt={Calendar} />
    </Style>
  );
};
