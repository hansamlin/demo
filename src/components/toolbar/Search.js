import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

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
  transform: scale(${props => props.theme.scale});
  transition: transform 0.6s ease-out;
`;

const Span = styled.span`
  font-size: 1.5rem;
  top: 2px;
  position: relative;
  opacity: ${props => props.theme.opacity};
`;

export default () => {
  const [show, setShow] = useState({ scale: 1, opacity: 1 });

  return (
    <Search theme={show} onClick={() => setShow({ scale: 70, opacity: 0 })}>
      <Span theme={show}>
        <FaSearch />
      </Span>
    </Search>
  );
};
