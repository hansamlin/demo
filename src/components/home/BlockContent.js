import React from "react";
import styled from "styled-components";

const Style = styled.div`
  color: white;
`;

const Title = styled.div`
  font-size: 30px;
  transform: ${props => props.theme.scale};
  transition: ${props => props.theme.transition};
  letter-spacing: 2px;
  text-align: center;
`;

const Hide = styled.div`
  height: ${props => props.theme.height};
  opacity: ${props => props.theme.opacity};
  transform: ${props => props.theme.transform};
  transition: height 0.01s linear,
    opacity 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9) 0.35s,
    transform 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9) 0.35s;
`;

const Link = ({ item }) => {
  return (
    <div>
      <a href={item.href}>{item.title}</a>
    </div>
  );
};

const BlockContent = ({ note, blockTitle, blockHide }) => {
  return (
    <Style>
      <Title theme={blockTitle}>{note.title}</Title>
      <Hide theme={blockHide}>
        <div>{note.description}</div>
        {note.link.map((link, index) => (
          <Link key={index} item={link} />
        ))}
        <div>
          <button>{note.button}</button>
        </div>
      </Hide>
    </Style>
  );
};

export default BlockContent;
