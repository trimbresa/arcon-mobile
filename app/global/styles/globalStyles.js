import {black} from "./colors";
import * as fonts from "./fonts";
import * as colors from "./colors";

const shadow = {
  shadowColor: black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 20,
  elevation: 10,
};

const placeholderText = {
  fontFamily: fonts.primaryFontMedium,
  fontSize: 15,
  color: colors.grey,
};

export {shadow, placeholderText};
