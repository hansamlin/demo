import React from "react";
import styled from "styled-components";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const Style = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 77%;
`;

// const Icon = styled.div`
//   font-size: 30px;
//   transform: ${props => props.theme.scale};
//   transition: ${props => props.theme.transition};
//   letter-spacing: 2px;
//   text-align: center;
// `;

// const Hide = styled.div`
//   height: ${props => props.theme.height};
//   opacity: ${props => props.theme.opacity};
//   transform: ${props => props.theme.transform};
//   transition: height 0.01s linear,
//     opacity 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9) 0.35s,
//     transform 0.45s cubic-bezier(0.26, 0.88, 0.57, 0.9) 0.35s;
// `;

// const Link = ({ item }) => {
//   return (
//     <div>
//       <a href={item.href}>{item.title}</a>
//     </div>
//   );
// };

const Button = styled.button``;

const Icon = () => {
  const Style = styled.div`
    text-align: center;
  `;

  const Span = styled.span`
    font-size: 1.5vw;
    margin: 0 0.3vw;
  `;

  return (
    <Style>
      <Span>
        <FaYoutube />
      </Span>
      <Span>
        <FaFacebookF />
      </Span>
      <Span>
        <FaInstagram />
      </Span>
    </Style>
  );
};

const Today = () => {
  const Style = styled.div`
    border-top: 1px rgba(255, 255, 255, 1) dashed;
    border-bottom: 1px rgba(255, 255, 255, 1) dashed;
    max-width: 360px;
    width: 75%;
    max-height: 144px;
    height: 13.2vh;
    margin: 2.53vh auto;
  `;

  return <Style></Style>;
};

const Ing = () => {
  const Style = styled.div`
    border-top: 1px rgba(255, 255, 255, 1) dashed;
    border-bottom: 1px rgba(255, 255, 255, 1) dashed;
    max-width: 315px;
    width: 65.625%;
    max-height: 194px;
    height: 17.96vh;
    margin: 2.22vh auto;
  `;

  return <Style></Style>;
};

const Soon = () => {
  const Style = styled.div`
    border-top: 1px rgba(255, 255, 255, 1) dashed;
    border-bottom: 1px rgba(255, 255, 255, 1) dashed;
    max-width: 282px;
    width: 58.75%;
    max-height: 194px;
    height: 17.96vh;
    margin: 4.166vh auto;
  `;

  return <Style></Style>;
};

const BlockContent = () => {
  return (
    <Style>
      <Icon />
      <Today />
      <Ing />
      <Soon />
    </Style>
  );
};

export default BlockContent;
