import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 100,
    maxHeight: 100,
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
    paddingTop: 15,
    padding: 15,
  },
  sendBtn: {
    paddingHorizontal: 15,
    alignSelf: "center",
  },
});
