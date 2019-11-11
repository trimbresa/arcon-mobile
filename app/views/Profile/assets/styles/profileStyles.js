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
    marginBottom: 80
  },
  profileHeaderImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
    overflow: "hidden",
    bottom: -60,
    backgroundColor: 'lightgrey',
    // marginTop: -60,
    alignSelf: "center"
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
  },
  logoutBtn: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 10,
    backgroundColor: colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center'
  },
  logoutBtnLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    marginLeft: 5,
    fontSize: 13
  }
});