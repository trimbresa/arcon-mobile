import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  scheduleSafarea: {
    flex: 1,
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
    paddingRight: 12,
    paddingTop: 20,
    alignItems: "flex-end",
    width: 55,
    borderTopColor: "#e8ecf0",
    borderTopWidth: 1,
  },
  dayIndicatorDate: {
    fontSize: 20,
    fontFamily: fonts.primaryFontSemiBold,
  },
  dayIndicatorDay: {
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.darkGrey,
    fontSize: 12,
    textAlign: "right",
  },
  dayIndicatorMonth: {
    fontFamily: fonts.primaryFontBold,
    color: colors.black,
    fontSize: 14,
    textAlign: "right",
  },

  // empty
  emptyDayIndicator: {
    width: 55,
  },
  emptyItemDayIndicator: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emptyItemDayIndicatorText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.darkGrey,
  },
  emptyData: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#e8ecf0",
  },
  emptyDataText: {
    color: "#79838a",
    fontSize: 14,
  },
});
