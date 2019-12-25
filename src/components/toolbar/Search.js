import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../container/context";

const Search = styled.div`
  background-color: #ffffff;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  vertical-align: middle;
  text-align: center;
  line-height: 64px;
  margin: 0 39px 0 41px;
  cursor: pointer;
  transform: scale(${props => props.theme.search.scale});
  transition: transform 0.6s ease-out;
  z-index: 15;
`;

const Span = styled.span`
  font-size: 1.5rem;
  position: absolute;
  cursor: pointer;
  transform: translate(-82px, 20px);
  opacity: ${props => props.theme.search.opacity};
  z-index: 15;
`;

export default () => {
  const { show, setShow } = useContext(ThemeContext);

  const handleShow = () => {
    if (show.search.scale === 1) {
      setShow({
        search: { scale: 70, opacity: 0, cursor: "unset" },
        close: "open"
      });
    }
  };

  const handleClose = () => {
    setShow({
      search: { scale: 1, opacity: 1, cursor: "pointer" },
      close: "close"
    });
  };

  const Close = ({ theme }) => {
    const Style = styled.div`
      position: fixed;
      top: 30px;
      right: 30px;
      color: #000;
      cursor: pointer;
      font-size: 70px;
      opacity: 0;
      transition: all 0.3s ease-in-out;

      &.open {
        transform: rotate(-90deg);
        z-index: 16;
        opacity: 1;
      }
    `;

    return (
      <Style
        theme={theme}
        onClick={handleClose}
        className={show.close === "open" ? "open" : ""}
      >
        <IoMdClose />
      </Style>
    );
  };

  return (
    <>
      <Search theme={show} onClick={handleShow}></Search>
      <Span theme={show} onClick={handleShow}>
        <FaSearch />
      </Span>
      <Close theme={show} />
    </>
  );
};
