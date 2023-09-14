import { Dimensions } from "react-native";

const IDOL_WIDTH = 375;
const IDOL_HEIGHT = 812;

const { height, width } = Dimensions.get("window");

const getPixelsHeight = (size) => {
  const ratio = (100 * size) / IDOL_HEIGHT;
  return Math.ceil((ratio * height) / 100);
};

const getPixelsWidth = (size) => {
  const ratio = (100 * size) / IDOL_WIDTH;
  return Math.ceil((ratio * width) / 100);
};

export const pixels = {
  width: {
    5: getPixelsWidth(5),
    6: getPixelsWidth(6),
    8: getPixelsWidth(8),
    10: getPixelsWidth(10),
    11: getPixelsWidth(11),
    13: getPixelsWidth(13),
    14: getPixelsWidth(14),
    15: getPixelsWidth(15),
    16: getPixelsWidth(16),
    17: getPixelsWidth(17),
    20: getPixelsWidth(20),
    22: getPixelsWidth(22),
    24: getPixelsWidth(24),
    25: getPixelsWidth(25),
    28: getPixelsWidth(28),
    30: getPixelsWidth(30),
    32: getPixelsWidth(32),
    35: getPixelsWidth(35),
    37: getPixelsWidth(37),
    40: getPixelsWidth(40),
    43: getPixelsWidth(43),
    46: getPixelsWidth(46),
    50: getPixelsWidth(50),
    60: getPixelsWidth(60),
    64: getPixelsWidth(64),
    68: getPixelsWidth(68),
    70: getPixelsWidth(70),
    85: getPixelsWidth(85),
    90: getPixelsWidth(90),
    92: getPixelsWidth(92),
    104: getPixelsWidth(104),
    112: getPixelsWidth(112),
    110: getPixelsWidth(110),
    120: getPixelsWidth(120),
    240: getPixelsWidth(240),
    375: getPixelsWidth(375),
    500: getPixelsWidth(500),
  },
  height: {
    5: getPixelsHeight(5),
    6: getPixelsHeight(6),
    8: getPixelsHeight(8),
    10: getPixelsHeight(10),
    11: getPixelsHeight(11),
    13: getPixelsHeight(13),
    14: getPixelsHeight(14),
    15: getPixelsHeight(15),
    16: getPixelsHeight(16),
    17: getPixelsHeight(17),
    20: getPixelsHeight(20),
    22: getPixelsHeight(22),
    24: getPixelsHeight(24),
    25: getPixelsHeight(25),
    28: getPixelsHeight(28),
    30: getPixelsHeight(30),
    32: getPixelsHeight(32),
    35: getPixelsHeight(35),
    37: getPixelsHeight(37),
    40: getPixelsHeight(40),
    43: getPixelsHeight(43),
    46: getPixelsHeight(46),
    50: getPixelsHeight(50),
    60: getPixelsHeight(60),
    64: getPixelsHeight(64),
    68: getPixelsHeight(68),
    70: getPixelsHeight(70),
    85: getPixelsHeight(85),
    90: getPixelsHeight(90),
    92: getPixelsHeight(92),
    100: getPixelsHeight(100),
    104: getPixelsHeight(104),
    110: getPixelsHeight(110),
    120: getPixelsHeight(120),
    240: getPixelsHeight(240),
    375: getPixelsHeight(375),
    500: getPixelsHeight(500),
  },
};
