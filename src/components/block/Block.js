import styled from "styled-components";
import { vHeight, vWidth } from "../container/theme";

const Block = styled.div`
  position: fixed;
  width: calc(${vWidth} / 4);
  height: calc(((${vHeight} / 9) * 8) - 1px);
  bottom: 0;
  transition: ${({ animation }) => animation && "all 400ms ease-in-out"};
  transform: ${({ position }) => position};
  background-color: ${props => props.theme.color};
  z-index: ${props => props.zindex && props.zindex};
  opacity: ${props => props.visible};
`;

export default Block;
