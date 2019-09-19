import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";

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
    fontFamily: "Montserrat-Medium",
    fontSize: 13
  }
});