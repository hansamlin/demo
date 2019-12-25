import styled from "styled-components";
import { vHeight, vWidth } from "../container/theme";

const Block = styled.div`
  position: ${props => props.position};
  display: inline-block;
  width: calc(${vWidth} / 4);
  height: calc(((${vHeight} / 9) * 8) - 1px);
  transition: ${({ animation }) => animation && "all 400ms ease-in-out"};
  background-color: ${props => props.theme.color};
  z-index: ${props => props.zindex && props.zindex};
  opacity: ${props => props.visible};
  bottom: ${props => props.theme.bottom && props.theme.bottom};
  transform: ${props => props.theme.transform && props.theme.transform};
`;

export default Block;
