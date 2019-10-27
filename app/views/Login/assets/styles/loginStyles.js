import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  bgWrapper: {
    flex: 1,
    // width: "100%",
    // height: "100%"
  },
  loginWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 60
  },
  loginInnerWrapper: {
    backgroundColor: colors.blackFade,
    flex: 1,
    justifyContent: "center",
  },
});