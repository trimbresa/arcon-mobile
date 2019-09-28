import { StyleSheet } from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  msgItemWrapper: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  avatarWrapper: {
    marginRight: 15,
    borderRadius: 48,
    backgroundColor: colors.lightGrey
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    overflow: "hidden",
  },
  onlineBadge: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: colors.green,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderColor: "white"
  },
  msgItemText: {
    justifyContent: "center",
    flex: 4,
  },
  msgItemTitle: {
    fontSize: 13,
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.black,
    marginBottom: 5
  },
  msgItemTitleUnread: {
    color: colors.primaryColor
  },
  msgItemLastMsg: {
    fontSize: 12,
    color: colors.black,
    fontFamily: fonts.primaryFontMedium
  },
  msgItemActions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  timestamp: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.secondaryColor,
    marginBottom: 5,
    fontSize: 12
  },
  badge: {
    fontFamily: fonts.primaryFontMedium,
    backgroundColor: colors.primaryColor,
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  badgeNumber: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    fontSize: 11
  }
});