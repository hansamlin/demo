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
    slider: "left",
    title: "MEET ISABELLA & HER MUSEUM",
    description: "Learn about the daring visionary and the Museum she created.",
    link: [{ title: "Learn about the theft", href: "#" }],
    button: "STORIES AND MORE"
  },
  {
    color: "#3d439b",
    background: {
      type: "video",
      item: video
    },
    slider: "center",
    title: "Come & Visit",
    description: "Currently closed",
    link: [
      { title: "All hours", href: "#" },
      { title: "Directions & Parking", href: "#" }
    ],
    button: "Plan your visit"
  },
  {
    color: "#00aeef",
    background: {
      type: "img",
      item: `url("${sumeitse}")`
    },
    slider: "right",
    title: "In the Company of Artists",
    description:
      "Celebrate the living legacy of artists at the Museum with Sophie Calle, Bharti Kher, Luisa Lambri, Laura Owens, Rachel Perry, Dayanita Singh, and Su-Mei Tse.",
    link: [],
    button: "EXPLORE TODAY"
  }
];

const vWidth = "(100vw - 20px)";
const blockWidth = `(${vWidth} / 3.6)`;
const space = `(${vWidth} - (${blockWidth} * 3))`;
const center = `translate(calc(${blockWidth} + (${space} / 2)), 0)`;
const right = `translate(calc(${vWidth} - ${blockWidth}), 0)`;

export const position = {
  left: "translate(0, 0)",
  center: center,
  right: right
};
