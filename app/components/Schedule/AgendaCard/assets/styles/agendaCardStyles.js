import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingRight: 10,
  },
  showAllBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  showAllText: {
    marginRight: 10,
    fontFamily: fonts.primaryFontMedium,
    color: colors.primaryColor,
  },
  firstItem: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e8ecf0",
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: "#e8ecf0",
    flexDirection: "row",
  },
  itemDurationWrapper: {
    width: 80,
  },
  itemHourText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.primaryFontMedium,
  },
  itemDurationText: {
    color: colors.darkGrey,
    fontFamily: fonts.primaryFontMedium,
    fontSize: 10,
    lineHeight: 15,
    textAlignVertical: "center",
    marginVertical: 4,
    borderLeftWidth: 1,
    borderLeftColor: colors.lightGrey,
    paddingLeft: 5,
  },
  itemInfoWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: colors.lighterGrey,
  },
  itemTitleText: {
    width: "100%",
    fontFamily: fonts.primaryFontBold,
    fontSize: 15,
    marginBottom: 3,
  },
  itemRoleText: {
    width: "100%",
    fontFamily: fonts.primaryFontMedium,
    fontSize: 13,
    marginBottom: 8,
  },
  secondaryInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    // flex: 1,
  },
  itemStatus: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 11,
    lineHeight: 18,
    paddingHorizontal: 8,
    paddingBottom: 2,
    borderRadius: 20,
  },
  itemUser: {
    // maxWidth: "50%",
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 11,
    lineHeight: 18,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginLeft: 10,
    flexGrow: 0,
    flexShrink: 1,
  },
  itemBreakText: {
    position: "absolute",
    right: 15,
    top: 12,
    color: colors.darkGrey,
    fontFamily: fonts.primaryFontMedium,
    fontSize: 12,
  },
});
