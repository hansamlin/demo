import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Search = styled.div`
  background-color: #ffffff;
  border-radius: 50% 50%;
  display: inline-block;
  position: relative;
  width: 3vw;
  height: 3vw;
  vertical-align: middle;
  text-align: center;
  line-height: 3vw;
  margin: 0 19.5px 0 20.5px;
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
