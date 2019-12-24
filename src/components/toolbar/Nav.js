import React from "react";
import styled from "styled-components";
import { FaRegCalendarAlt, FaFolderOpen, FaShareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiOrganigram } from "react-icons/gi";

const Span = styled.span`
  font-size: 1.5rem;
  margin: 0 0.3vw;
`;

const Ul = styled.ul`
  list-style: none;
  color: white;
  display: inline-block;
  vertical-align: middle;
`;

const Li = styled.li`
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
`;

export default () => {
  return (
    <Ul>
      <Li>
        <Span>EN</Span>
      </Li>
      <Li>
        <Span>
          <GiOrganigram />
        </Span>
      </Li>
      <Li>
        <Span>
          <FaRegCalendarAlt />
        </Span>
      </Li>
      <Li>
        <Span>
          <MdEmail />
        </Span>
      </Li>
      <Li>
        <Span>
          <FaFolderOpen />
        </Span>
      </Li>
      <Li>
        <Span>
          <FaShareAlt />
        </Span>
      </Li>
    </Ul>
  );
};
