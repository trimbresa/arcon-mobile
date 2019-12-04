import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  scheduleSafarea: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  scheduleWrapper: {
    flex: 1,
    padding: 30,
  },
  activeTabTintColor: {
    color: colors.primaryColor,
  },
  tabBartab: {
    fontFamily: fonts.primaryFontSemiBold,
  },
  tabBar: {
    backgroundColor: colors.white,
  },
  tabBarTabLabel: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 12,
  },
  indicatorStyle: {
    backgroundColor: colors.primaryColor,
  },

  itemLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.secondaryColor,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.white,
  },

  // Custom calendar
  calendar: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    backgroundColor: "#f0f4f7",
    color: colors.primaryColor,
  },
  dayIndicator: {
    paddingRight: 10,
    paddingTop: 10,
    alignItems: "flex-end",
    width: 60,
  },
  dayIndicatorDate: {
    fontSize: 20,
    fontFamily: fonts.primaryFontSemiBold,
  },
  dayIndicatorDay: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.darkGrey,
    textAlign: "right",
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
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
  itemStatus: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 11,
    lineHeight: 18,
    paddingHorizontal: 8,
    paddingBottom: 2,
    borderRadius: 20,
  },
  itemBreakText: {
    position: "absolute",
    right: 15,
    top: 12,
    color: colors.darkGrey,
    fontFamily: fonts.primaryFontMedium,
    fontSize: 12,
  },

  // empty
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e8ecf0",
  },
  emptyItemText: {
    color: "#79838a",
    fontSize: 14,
  },
});
