import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    flex: 0,
    width: "100%",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  inputWrapper: {
    flexDirection: "row",
  },
  input: {
    fontFamily: fonts.primaryFontMedium,
    flex: 1,
    height: 45,
    paddingLeft: 15,
  },
  actionsWrapper: {
    flexDirection: "row",
    flex: 0,
    alignItems: "center",
  },
  sendBtn: {
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
