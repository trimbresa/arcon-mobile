import { StyleSheet } from "react-native";

// Styles
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    // flex: 1,
    // width: 60,
    alignItems: "center",
  },
  avatar: {
    height: 35,
    width: 35,
    backgroundColor: colors.lightGrey,
    borderRadius: 35,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingRight: 1
  },
  onlineState: {
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.green,
  }
});