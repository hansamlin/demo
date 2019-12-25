import React from "react";
import { ThemeContext } from "../container/context";
import styled from "styled-components";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { theme } from "../container/theme";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Button = ({ color }) => {
  const Style = styled.button`
    border: 1px solid #ffffff;
    background: transparent;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    color: rgba(255, 255, 255, 1);
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

const Today = ({ today, slider }) => {
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

const Ing = ({ ing, color }) => {
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
      <Button color={color} />
    </Style>
  ) : (
    ""
  );
};

const Soon = ({ soon, color }) => {
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
      <Button color={color} />
    </Style>
  ) : (
    ""
  );
};

const News = ({ item }) => {
  return React.useMemo(
    () => (
      <>
        <Icon />
        <Today today={item.block.today} slider={item.slider} />
        <Ing ing={item.block.ing} color={item.color} />
        <Soon soon={item.block.soon} color={item.color} />
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

const StyleAbsolute = styled.div`
  position: absolute;
  width: 100%;
  top: 32.77vh;
  height: 67.23vh;
`;

const Style = styled.div`
  color: white;
  position: relative;
  width: calc(100% / 4);
  opacity: ${props => props.theme};
  display: inline-block;
  z-index: ${props => (props.theme === "1" ? 6 : 2)};
  height: 100%;
  vertical-align: bottom;
`;

const BlockContent = ({ currentTheme }) => {
  return (
    <StyleAbsolute>
      {theme.map((item, index) => (
        <Style
          theme={currentTheme.color === item.color ? "1" : "0"}
          key={index}
        >
          <News item={item} />
        </Style>
      ))}
    </StyleAbsolute>
  );
};

export default () => {
  const { currentTheme } = React.useContext(ThemeContext);

  return <BlockContent currentTheme={currentTheme} />;
};
