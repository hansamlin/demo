import Arts from "../1.png";
import ChildrensArt from "../2.png";
import HengshenArt from "../3.png";
import ChunglUArt from "../4.png";
import Index_01 from "../index_01.png";
import Index_02 from "../index_02.png";
import Index_03 from "../index_03.png";
import Index_04 from "../index_04.png";
import Footer_01 from "../footer_01.png";
import Footer_02 from "../footer_02.png";
import Footer_03 from "../footer_03.png";
import Footer_04 from "../footer_04.png";

export const theme = [
  {
    color: "rgba(229, 22, 128, 0.88)",
    subColor: "#F2408A",
    background: {
      type: "img",
      item: `url("${Arts}")`,
      index: Index_01,
      footer: Footer_01
    },
    slider: 1,
    block: {
      title: "桃園市立美術館",
      enTitle: "TAOYUAN MUSEUM OF FINE ARTS",
      today: ["建築開幕倒數432天", "敬請期待！"],
      ing: {
        title: "新風景線─2019桃園地景藝術節",
        time: {
          from: { year: "2019", date: "11.06" },
          to: { year: "2019", date: "12.30" }
        }
      },
      soon: {
        title: "2019桃園地景藝術節國際論壇「新風景線」的想像與創建",
        time: {
          only: { year: "2019", date: "12.28" },
          from: { year: "2019", date: "01.05" },
          to: { year: "2020", date: "01.31" }
        }
      }
    }
  },
  {
    color: "rgba(235, 108, 1, 0.88)",
    subColor: "#EB6C01",
    background: {
      type: "img",
      item: `url("${ChildrensArt}")`,
      index: Index_02,
      footer: Footer_02
    },
    slider: 2,
    block: {
      title: "桃園市兒童美術館",
      enTitle: "TAOYUAN CHILDREN'S ART CENTER",
      today: {
        time: "09:30~17:30",
        address: "334 桃園市八德區介壽路一段728號6樓"
      },
      ing: {
        title: "日月奇遇記",
        time: {
          from: { year: "2019", date: "12.08" },
          to: { year: "2020", date: "03.02" }
        }
      },
      soon: {
        title: "埤塘生態黏土DIY",
        time: {
          only: "",
          from: { year: "2020", date: "01.05" },
          to: { year: "2020", date: "01.31" }
        }
      }
    }
  },
  {
    color: "rgba(214, 11, 41, 0.88)",
    subColor: "#D60B29",
    background: {
      type: "img",
      item: `url("${HengshenArt}")`,
      index: Index_03,
      footer: Footer_03
    },
    slider: 3,
    block: {
      title: "橫山書法藝術館",
      enTitle: "HENGSHEN CALLIGRAPHY ART CENTER",
      today: {
        time: "09:30～17:00",
        address: "337 桃園市大園區5-8號陂塘公園"
      },
      ing: {
        title: "「玩筆弄墨—兒童書藝體驗展」",
        time: {
          from: { year: "2019", date: "12.08" },
          to: { year: "2020", date: "03.02" }
        }
      },
      soon: {
        title: "書藝巡遊－書藝導覽公車",
        time: {
          only: "",
          from: { year: "2020", date: "01.05" },
          to: { year: "2020", date: "01.31" }
        }
      }
    }
  },
  {
    color: "rgba(149, 1, 125, 0.88)",
    subColor: "#95017D",
    background: {
      type: "img",
      item: `url("${ChunglUArt}")`,
      index: Index_04,
      footer: Footer_04
    },
    slider: 4,
    block: {
      title: "中路美術館",
      enTitle: "CHUNGLU ART CENTER",
      today: [
        ["藝術家駐館計畫", "徵件倒數12天→"],
        ["建築開幕倒數234天", "敬請期待！"]
      ]
    }
  }
];

export const vHeight = "100vh";
export const vWidth = "100%";
const two = `translate(calc(${vWidth} * 1), 0)`;
const three = `translate(calc(${vWidth} * 2), 0)`;
const four = `translate(calc(${vWidth} * 3), 0)`;

export const position = {
  1: "translate(0, 0)",
  2: two,
  3: three,
  4: four
};
