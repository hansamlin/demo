import React, { useState, useContext } from "react";
import styled from "styled-components";
import SearchSelect from "./SearchSelect";
import SearchKeyWord from "./SearchKeyWord";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../container/context";

const SearchPup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: ${props => props.theme.close.zIndex};
  opacity: ${props => props.theme.close.opacity};
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const Span = styled.span`
  font-size: 4rem;
  width: 100%;
  position: absolute;
  top: 10rem;
`;

const Style = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  color: #000;
  cursor: pointer;
  font-size: 70px;
  opacity: ${props => props.theme.close.opacity};
`;

const Close = ({ theme, setShow, setToggle }) => {
  const handleClose = () => {
    setShow({
      search: { scale: 1, opacity: 1, cursor: "pointer" },
      close: { opacity: 0, zIndex: 0 }
    });
    setToggle(false);
  };

  return React.useMemo(
    () => (
      <Style theme={theme} onClick={handleClose}>
        <IoMdClose />
      </Style>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );
};

export default () => {
  const { show, setShow } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <SearchPup theme={show}>
      <Span>讓我們推薦您</Span>
      <SearchSelect toggle={toggle} setToggle={setToggle} show={show} />
      <SearchKeyWord show={show} />
      <Close theme={show} setShow={setShow} setToggle={setToggle} />
    </SearchPup>
  );
};
