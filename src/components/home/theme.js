import sumeitse from "../sumeitse.jpg";
import zorn from "../zorn.jpg";
// import video from "../loop_home.mp4";

export const theme = [
  {
    color: "rgba(229, 22, 128, 0.88)",
    background: {
      type: "img",
      item: `url("${zorn}")`
    },
    slider: 1,
    block: { title: "桃園市立美術館", enTitle: "TAOYUAN MUSEUM OF FINE ARTS" }
  },
  {
    color: "rgba(235, 108, 1, 0.88)",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: 2,
    block: {
      title: "桃園市兒童美術館",
      enTitle: "TAOYUAN CHILDREN'S ART CENTER"
    }
  },
  {
    color: "rgba(149, 1, 125, 0.88)",
    background: {
      type: "img",
      item: `url("${zorn}")`
    },
    slider: 3,
    block: {
      title: "橫山書法藝術館",
      enTitle: "HENGSHEN CALLIGRAPHY ART CENTER"
    }
  },
  {
    color: "rgba(214, 11, 41, 0.88)",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: 4,
    block: { title: "中路美術館", enTitle: "CHUNGLU ART CENTER" }
  }
];

export const vHeight = "100vh";
export const vWidth = "100vw";
const blockWidth = `(${vWidth} / 4)`;
const two = `translate(calc(${blockWidth} * 1), 0)`;
const three = `translate(calc(${blockWidth} * 2), 0)`;
const four = `translate(calc(${vWidth} - ${blockWidth}), 0)`;

export const position = {
  1: "translate(0, 0)",
  2: two,
  3: three,
  4: four
};
