import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  homeSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white
  },
  profileWrapper: {
    flex: 1,
  },
  profileHeader: {
    flex: 1,
    backgroundColor: colors.lighterGrey,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    marginBottom: 80
  },
  profileHeaderImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
    overflow: "hidden",
    bottom: -60,
    marginTop: -60
  },
  profileBody: {
    paddingBottom: 40
  },
  text: {
    color: colors.black,
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: fonts.primaryFontMedium
  },
  profileFormGroup: {
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  profileFormGroupInline: {
    flexDirection: "row"
  },
  profileFormGroupLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.secondaryColor,
    marginBottom: 6,
    fontSize: 12
  },
  profileFormInput: {
    flex: 1,
    fontFamily: fonts.primaryFontMedium
  },
  changePwBtn: {
  },
  changePwBtnLabel: {
    color: colors.primaryColor
  }
});