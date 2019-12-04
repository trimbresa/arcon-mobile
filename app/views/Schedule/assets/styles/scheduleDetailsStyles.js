import {StyleSheet, Dimensions} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "flex-end",
    // flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    backgroundColor: colors.white,
    // flex: 1,
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topContainer: {
    padding: 20,
    marginBottom: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  titleText: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 30,
    marginBottom: 10,
  },
  jobText: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 15,
  },

  // scrollview
  list: {
    paddingHorizontal: 20,
  },
  status: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 20,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontFamily: fonts.primaryFontMedium,
    fontSize: 14,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  // breaks
  breakTitleText: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 12,
    marginBottom: 10,
    marginTop: 20,
  },
  break: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  breakInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginLeft: 10,
    borderLeftColor: colors.lightGrey,
    borderLeftWidth: 1,
  },
  breakText: {
    width: 75,
    // borderWidth: 1,
    fontFamily: fonts.primaryFontMedium,
  },
  breakArrow: {
    marginLeft: 5,
    marginRight: 15,
  },
  breakDurationText: {
    textAlign: "right",
    textAlignVertical: "center",
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 12,
    color: colors.darkGrey,
  },
});
