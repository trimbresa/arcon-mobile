import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.blackFade,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  indicator: {
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.white,
    position: "absolute",
    top: 40,
    alignSelf: "center",
    fontSize: 13,
  },
  title: {
    fontFamily: fonts.primaryFontLight,
    fontSize: 36,
    marginBottom: 50,
    color: colors.white,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 50,
    paddingHorizontal: 20,
    fontFamily: fonts.primaryFontMedium,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: colors.primaryColor,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtnText: {
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.white,
  },

  // code input
  codeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  codeInput: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 24,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});
