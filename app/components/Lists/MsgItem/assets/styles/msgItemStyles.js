import {StyleSheet} from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  msgItemWrapper: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
  },
  avatarWrapper: {
    flex: 1,
    maxWidth: 40,
    maxHeight: 40,
    marginRight: 15,
  },
  avatar: {
    backgroundColor: colors.lightGrey,
    borderRadius: 40,
    overflow: "hidden",
    flex: 1,
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
    borderColor: "white",
  },
  msgRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  msgRowFirst: {
    marginBottom: 5,
  },
  msgItemTitle: {
    fontSize: 13,
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.black,
    flex: 1,
    marginRight: 5,
  },
  msgItemTitleUnread: {
    fontFamily: fonts.primaryFontBold,
    color: colors.primaryColor,
  },
  timestamp: {
    flex: 0,
    fontFamily: fonts.primaryFontMedium,
    color: colors.grey,
    fontSize: 10,
  },
  msgItemLastMsg: {
    flex: 1,
    fontSize: 12,
    color: colors.darkGrey,
    fontFamily: fonts.primaryFontMedium,
  },
  badge: {
    flex: 1,
    maxWidth: 17,
    height: 17,
    marginLeft: 5,
    fontFamily: fonts.primaryFontMedium,
    backgroundColor: colors.primaryColor,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeNumber: {
    lineHeight: 13,
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.white,
    fontSize: 11,
  },
});
