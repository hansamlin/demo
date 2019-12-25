import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Search = styled.div`
  background-color: #ffffff;
  border-radius: 50% 50%;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  vertical-align: middle;
  text-align: center;
  line-height: 64px;
  margin: 0 39px 0 41px;
`;

const Span = styled.span`
  font-size: 1.5rem;
  top: 2px;
  position: relative;
`;

export default () => {
  return (
    <Search>
      {/* <Aaa> */}
      <Span>
        <FaSearch />
      </Span>
      {/* </Aaa> */}
    </Search>
  );
};
