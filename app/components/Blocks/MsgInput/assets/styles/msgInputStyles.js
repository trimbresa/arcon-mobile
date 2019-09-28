import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    paddingTop: 15,
    padding: 15,
    maxHeight: 120,
  },
  sendBtn: {
    paddingHorizontal: 15,
    alignSelf: "center",
  }
});