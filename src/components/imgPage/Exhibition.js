import React, { useState } from "react";
import styled from "styled-components";
import Exhibition from "../exhibition.png";
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

export default () => {
  const [show, setShow] = useState({
    search: { scale: 1, opacity: 1, cursor: "pointer" },
    close: { opacity: 0, zIndex: 0 }
  });

  const img = { img: true };

  return (
    <Style>
      <Logo show={show} />
      <ThemeContext.Provider value={{ show, setShow, img }}>
        <Search />
        <SearchPup />
      </ThemeContext.Provider>
      <Img src={Exhibition} alt={Exhibition} />
    </Style>
  );
};
