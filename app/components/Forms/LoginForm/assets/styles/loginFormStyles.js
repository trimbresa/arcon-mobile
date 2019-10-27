import { StyleSheet } from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  loginFormWrapper: {
    paddingLeft: 20
  },
  loginFormTitle: {
    fontFamily: fonts.primaryFontLight,
    fontSize: 40,
    marginBottom: 60,
    color: colors.white
  },
  loginFieldsWrapper: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingBottom: 50,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  loginFieldsGroup: {
    paddingHorizontal: 40
  },
  field: {
    height: 60,
    color: colors.black,
    backgroundColor: colors.white
  },
  fieldMsg: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.red
  },
  submitBtnWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  submitBtn: {
    flexDirection: "row",
    backgroundColor: colors.primaryColor,
    flex: 0.8,
    borderRadius: 60,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: 50,
    paddingLeft: 24,
    paddingRight: 15,
    justifyContent: "space-between",
    alignItems: "center",
    top: -25
  },
  submitBtnInProgress: {
    backgroundColor: colors.secondaryColor
  },
  submitBtnLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    fontSize: 16
  }
});