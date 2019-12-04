import {StyleSheet, Dimensions} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 0,
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 20,
    width: "80%",
  },
  title: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 20,
    marginBottom: 15,
  },
  label: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 12,
    marginTop: 20,
  },
  input: {
    fontFamily: fonts.primaryFontMedium,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.lightGrey,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 10,
  },
  submitBtn: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.primaryColor,
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 10,
  },
  submitBtnText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
  },
  errorMsg: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.red,
    marginVertical: 15,
  },
});
