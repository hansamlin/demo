import sumeitse from "../sumeitse.jpg";
import zorn from "../zorn.jpg";
import video from "../loop_home.mp4";

export const theme = [
  {
    color: "#e5439a",
    background: {
      type: "img",
      item: `url("${zorn}")`
    },
    slider: "left"
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: video
    },
    slider: "center"
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: "right"
  }
];

const vWidth = "(100vw - 20px)";
const blockWidth = `(${vWidth} / 3.6)`;
const space = `(${vWidth} - (${blockWidth} * 3))`;
const center = `translate(calc(${blockWidth} + (${space} / 2)), 0)`;
const right = `translate(calc((${blockWidth} * 2) + (${space} / 2) * 2), 0)`;

export const position = {
  left: "translate(0, 0)",
  center: center,
  right: right
};