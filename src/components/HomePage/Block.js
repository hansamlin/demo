import styled from "styled-components";

const Block = styled.div`
  position: absolute;
  width: calc((100vw - 20px) / 3.6);
  height: calc(100vh - 20px);
  top: ${props => (props.static ? "10px" : 0)};
  left: ${props => (props.static ? "10px" : 0)};
  transition: ${({ animation }) => animation && "all 400ms ease-in-out"};
  transform: ${({ position }) => position};
  background-color: ${props => props.theme.color};

  opacity: ${props => props.opacity};
  mix-blend-mode: hard-light;
`;

export default Block;
