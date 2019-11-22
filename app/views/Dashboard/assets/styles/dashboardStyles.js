import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";
import {shadow} from "../../../../global/styles/globalStyles";

export default StyleSheet.create({
  newPostShortcutWrapper: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 30,
    flex: 0,
    marginLeft: 15,
    marginBottom: 8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  newPostShortcutText: {
    marginLeft: 8,
    fontSize: 11,
    color: colors.white,
    fontFamily: fonts.primaryFontMedium,
  },
  dashboardSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lighterGrey,
    fontFamily: fonts.primaryFontMedium,
  },
  contentWrapper: {
    color: colors.black,
    fontSize: 30,
  },
  postWrapper: {
    paddingHorizontal: 15,
  },
  statsBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.primaryColor,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    ...shadow,
  },
  statsBtnText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    fontSize: 13,
    marginLeft: 8,
  },
  dataMsg: {
    fontFamily: fonts.primaryFontMedium,
    textAlign: "center",
    marginTop: 15,
  },
});
