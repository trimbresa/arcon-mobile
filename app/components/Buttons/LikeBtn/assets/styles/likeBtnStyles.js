import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  likeBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25
  },
  likesSpan: {
    fontFamily: fonts.primaryFontMedium,
    marginLeft: 3
  }
});