import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Style = styled.div`
  width: 50%;
  position: relative;
  opacity: 0;
  transition: opacity 0.6s ease-in-out 0.1s;

  &.open {
    opacity: 1;
  }
`;

const Input = styled.input`
  border: 1px solid #000000;
  border-radius: 3rem;
  width: 27rem;
  height: 4rem;
  display: block;
  margin-left: calc(50% - 20rem);
  line-height: 4rem;
  font-size: 2.5rem;
  position: absolute;
  top: calc(50% - 4rem);
  padding-left: 3rem;
`;

const Span = styled.span`
  top: calc(50% - 3.4rem);
  position: absolute;
  font-size: 2.5rem;
  left: calc(50% + 5rem);
`;

const HotKeyWord = styled.span`
  position: absolute;
  font-size: 1.5rem;
  top: calc(50% + 1rem);
  left: calc(50% - 17rem);
`;

const Tag = styled.div`
  width: 27rem;
  height: 4rem;
  display: block;
  margin-left: calc(50% - 17rem);
  position: absolute;
  top: calc(50% + 4rem);
  text-align: left;
`;

const KeyWordTag = styled.span`
  background: #efefef;
  border-radius: 20px;
  padding: 10px 1.5rem;
  display: inline-block;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

export default ({ show }) => {
  return (
    <Style className={show.close.opacity === 1 && "open"}>
      <Input type="number" placeholder="關鍵字搜尋" />
      <Span>
        <FaSearch />
      </Span>
      <HotKeyWord>熱門關鍵字搜尋：</HotKeyWord>
      <Tag>
        <KeyWordTag>導覽申請</KeyWordTag>
        <KeyWordTag>精選典藏</KeyWordTag>
        <KeyWordTag>志工招募</KeyWordTag>
        <KeyWordTag>玩筆弄墨一兒童書藝體驗展</KeyWordTag>
      </Tag>
    </Style>
  );
};
