import styled from "styled-components";
import { vHeight, vWidth } from "./theme";

const Block = styled.div`
  position: absolute;
  width: calc(${vWidth} / 4);
  height: calc(((${vHeight} / 9) * 8) - 1px);
  bottom: 0;
  left: 0;
  transition: ${({ animation }) => animation && "all 400ms ease-in-out"};
  transform: ${({ position }) => position};
  background-color: ${props => props.theme.color};
  z-index: ${props => props.zindex && props.zindex};
  opacity: ${props => props.visible};
  // border-radius: 50% 50% 0 0;
`;

export default Block;
