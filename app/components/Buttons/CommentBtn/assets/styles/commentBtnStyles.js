import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  commentBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },
  commentsSpan: {
    fontFamily: fonts.primaryFontMedium,
    marginLeft: 3
  }
});