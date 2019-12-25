import React from "react";
import { BlockContext } from "../container/context";
import styled from "styled-components";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { position } from "../container/theme";

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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Button = () => {
  const { color } = React.useContext(BlockContext);
  const Style = styled.button`
    border: 1px solid #ffffff;
    background: transparent;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    color: rgba(255, 255, 255, 1);
    // position: relative;
    // left: calc(100% / 2 - 60px);
    font-size: 14px;

    &:hover {
      background: rgba(255, 255, 255, 1);
      color: ${color};
    }

    &:focus {
      outline: none;
    }
  `;
  return (
    <div style={{ textAlign: "center" }}>
      <Style>閱讀更多</Style>
    </div>
  );
};

const P = styled.p`
  margin: auto;
`;

const Pstatic = styled(P)`
  font-size: 16px;
`;

const Ptitle = styled(P)`
  font-size: 26px;
`;

const SpanLarge = styled.span`
  font-size: 26px;
`;

const Paddress = styled(P)`
  font-size: 18px;
`;

const Space = styled.span`
  margin: 0 0.4vw;
  width: 20px;
  display: inline-block;
  background: #ffffff;
  height: 2px;
  vertical-align: super;
`;

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
  const { today, slider } = React.useContext(BlockContext);

  const Style = styled(Flex)`
    border-top: 1px rgba(255, 255, 255, 1) dashed;
    border-bottom: 1px rgba(255, 255, 255, 1) dashed;
    max-width: 360px;
    width: 75%;
    max-height: 144px;
    height: 13.2vh;
    margin: 2.53vh auto;
    justify-content: space-around;
  `;

  const FlexToday = styled(Flex)`
    justify-content: space-around;
    height: 40%;
  `;

  return (
    <Style>
      {Array.isArray(today) ? (
        slider === 1 ? (
          <div>
            {today.map((text, index) => {
              let num = text.match(/\d+/);

              if (num) {
                num = num.shift();
                return text.split(num).reduce((acc, curr) => (
                  <React.Fragment key={index}>
                    {acc}
                    <SpanLarge>{num}</SpanLarge>
                    {curr}
                  </React.Fragment>
                ));
              }
              return <P key={index}>{text}</P>;
            })}
          </div>
        ) : (
          today.map((text, index) => (
            <div key={index}>
              {text.map((str, index) => {
                let num = str.match(/\d+/);

                if (num) {
                  num = num.shift();
                  return str.split(num).reduce((acc, curr) => (
                    <React.Fragment key={index}>
                      {acc}
                      <SpanLarge>{num}</SpanLarge>
                      {curr}
                    </React.Fragment>
                  ));
                }
                return <P key={index}>{str}</P>;
              })}
            </div>
          ))
        )
      ) : (
        <>
          <FlexToday>
            <P>今日營業時間 → </P>
            <P>{today.time}</P>
          </FlexToday>
          <FlexToday>
            <P>交通資訊 →</P>
            <Paddress>{today.address}</Paddress>
          </FlexToday>
        </>
      )}
    </Style>
  );
};

const Ing = () => {
  const { ing } = React.useContext(BlockContext);

  const Style = styled(Flex)`
    height: 17.96vh;
    width: 90%;
    margin: 2.22vh auto;
    position: relative;
    justify-content: space-between;
  `;

  return ing ? (
    <Style>
      <div>
        <P>|</P>
        <Pstatic>當期展覽</Pstatic>
      </div>
      <div>
        <Ptitle>{ing.title}</Ptitle>
      </div>
      <div>
        <P>
          {ing.time.from.year} <SpanLarge>{ing.time.from.date}</SpanLarge>
          <Space></Space>
          {ing.time.to.year} <SpanLarge>{ing.time.to.date}</SpanLarge>
        </P>
      </div>
      <Button />
    </Style>
  ) : (
    ""
  );
};

const Soon = () => {
  const { soon } = React.useContext(BlockContext);

  const Style = styled(Flex)`
    height: 17.96vh;
    width: 90%;
    margin: 4.16vh auto;
    position: relative;
    justify-content: space-between;
  `;

  return soon ? (
    <Style>
      <div>
        <P>|</P>
        <Pstatic>近期活動</Pstatic>
      </div>
      <div>
        <Ptitle>{soon.title}</Ptitle>
      </div>
      <div>
        <P>
          {soon.time.only ? (
            <>
              {soon.time.only.year} <SpanLarge>{soon.time.only.date}</SpanLarge>
            </>
          ) : (
            <>
              {soon.time.from.year} <SpanLarge>{soon.time.from.date}</SpanLarge>
              <Space></Space>
              {soon.time.to.year} <SpanLarge>{soon.time.to.date}</SpanLarge>
            </>
          )}
        </P>
      </div>
      <Button />
    </Style>
  ) : (
    ""
  );
};

const BlockContent = () => {
  const { current, color, slider } = React.useContext(BlockContext);

  const Style = styled.div`
    color: white;
    position: fixed;
    width: calc(100vw / 4);
    top: 32.77vh;
    opacity: ${props => props.theme};
    transition: ${props => (props.theme === "1" ? "opacity 1s ease-out" : "")};
    transform: ${props => props.position};
    z-index: 2;
  `;

  return React.useMemo(() => (
    <Style theme={current === color ? "1" : "0"} position={position[slider]}>
      <Icon />
      <Today />
      <Ing />
      <Soon />
    </Style>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [current]);
};

export default BlockContent;
