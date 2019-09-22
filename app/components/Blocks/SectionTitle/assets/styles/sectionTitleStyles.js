import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  sectionTitleWrapper: {
    paddingHorizontal: 15,
    paddingTop: 26,
    paddingBottom: 11,
    backgroundColor: colors.white
  },
  sectionTitleText: {
    textTransform: "uppercase",
    color: colors.secondaryColor,
    fontFamily: fonts.primaryFontMedium,
    fontSize: 13
  }
});