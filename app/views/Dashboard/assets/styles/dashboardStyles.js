import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
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
    fontFamily: "Montserrat-Medium",
  },
  dashboardSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lighterGrey,
    fontFamily: "Montserrat-Medium"
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