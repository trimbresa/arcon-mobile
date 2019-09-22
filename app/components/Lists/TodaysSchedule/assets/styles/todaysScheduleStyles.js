import { StyleSheet } from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  scheduleWrapper: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10
  },
  scheduleText: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 15,
    paddingHorizontal: 5,
  }
});