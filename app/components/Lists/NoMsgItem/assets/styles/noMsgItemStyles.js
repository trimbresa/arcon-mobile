import { StyleSheet, Dimensions } from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    // flex: 1,
    height: Dimensions.get("window").height - 200,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.primaryFontBold,
    textAlign: "center",
    marginTop: 10
  }
});