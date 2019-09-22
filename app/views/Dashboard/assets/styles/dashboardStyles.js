import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";
import { shadow } from "../../../../global/styles/globalStyles";

export default StyleSheet.create({
  newPostShortcutWrapper: {
    shadowColor: colors.black,
    ...shadow
  },
  newPostShortcut: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 25,
    marginBottom: 15,
    fontSize: 16,
    color: colors.secondaryColor,
    fontFamily: fonts.primaryFontMedium,
  },
  dashboardSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lighterGrey,
    fontFamily: fonts.primaryFontMedium
  },
  contentWrapper: {
    color: colors.black,
    fontSize: 30
  },
  postWrapper: {
    paddingHorizontal: 15
  },
  scheduleBtnWrapper: {
    flex: 1,
    padding: 15,
    alignItems: "flex-end"
  },
  scheduleBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 5,
    ...shadow
  },
  scheduleBtnText: {
    color: colors.black,
    marginLeft: 8
  }
});