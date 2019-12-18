import {StyleSheet} from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  loginFormWrapper: {},
  loginFormTitle: {
    fontFamily: fonts.primaryFontLight,
    fontSize: 40,
    marginBottom: 60,
    marginLeft: 30,
    color: colors.white,
  },
  loginFieldsWrapper: {
    marginLeft: 30,
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: "hidden",
  },
  field: {
    fontFamily: fonts.primaryFontMedium,
    height: 50,
    paddingHorizontal: 30,
    width: "100%",
    color: colors.black,
    backgroundColor: colors.white,
  },
  fieldMsg: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.red,
    marginLeft: 25,
    fontSize: 12,
  },
  submitBtnWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  submitBtn: {
    flexDirection: "row",
    backgroundColor: colors.primaryColor,
    flex: 0.7,
    borderRadius: 60,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: 50,
    paddingLeft: 24,
    paddingRight: 15,
    justifyContent: "space-between",
    alignItems: "center",
    top: -25,
  },
  submitBtnInProgress: {
    backgroundColor: colors.secondaryColor,
  },
  submitBtnLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    fontSize: 16,
  },
  forgotPsdWrapper: {
    alignSelf: "center",
    padding: 10,
  },
  forgotPsdText: {
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.white,
    fontSize: 14,
  },
});
