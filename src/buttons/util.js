
const MARGIN_RIGHT = 10;
const MARGIN_LEFT = 10;

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = size => Math.round((width / guidelineBaseWidth) * size * 10) / 10;
// const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  Math.round((size + (scale(size) - size) * factor) * 10) / 10;

  const BUTTON_SIZE = moderateScale(40);

const getDefaultStyle = isLight => ({
  color: isLight ? 'rgba(0, 0, 0, 0.8)' : '#fff',
});

export { BUTTON_SIZE, getDefaultStyle, MARGIN_RIGHT, MARGIN_LEFT };
