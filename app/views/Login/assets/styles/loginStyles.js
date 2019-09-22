import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  bgWrapper: {
    width: "100%",
    height: "100%"
  },
  loginWrapper: {
    flex: 1,
    backgroundColor: colors.blackFade,
    justifyContent: "center",
    paddingBottom: 60
  },
  loginInnerWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});