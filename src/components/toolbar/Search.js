import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
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
  z-index: 1;
`;

const Span = styled.span`
  font-size: 1.5rem;
  position: absolute;
  cursor: pointer;
  transform: translate(-82px, 20px);
  opacity: ${props => props.theme.search.opacity};
  z-index: 1;
`;

export default () => {
  const { show, setShow } = useContext(ThemeContext);

  const handleShow = () => {
    if (show.search.scale === 1) {
      setShow({
        search: { scale: 70, opacity: 0, cursor: "unset" },
        close: { opacity: 1, zIndex: 16 }
      });
    }
  };

  return (
    <>
      <Search theme={show} onClick={handleShow} />
      <Span theme={show} onClick={handleShow}>
        <FaSearch />
      </Span>
    </>
  );
};
