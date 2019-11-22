import {StyleSheet} from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";
import {shadow} from "../../../../../global/styles/globalStyles";

export default StyleSheet.create({
  scheduleBtn: {
    width: "100%",
    alignSelf: "flex-start",
    paddingVertical: 26,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  scheduleBtnText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.primaryColor,
    fontSize: 15,
    marginLeft: 12,
  },
  schedulesList: {
    paddingHorizontal: "5%",
  },
  scheduleWrapper: {
    width: "100%",
    // backgroundColor: colors.lighterGrey,
    flex: 1,
    paddingVertical: 10,
    // paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  scheduleTitle: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 17,
    marginBottom: 5,
  },
  scheduleText: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 13,
    color: colors.darkGrey,
  },
  eventsWrapper: {
    marginTop: 5,
    marginLeft: 30,
  },
  eventsTitle: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 12,
    marginBottom: 5,
  },
  event: {
    backgroundColor: colors.lighterGrey,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  eventText: {
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 13,
    color: colors.darkGrey,
    marginLeft: 10,
  },
});
