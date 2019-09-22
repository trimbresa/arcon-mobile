import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default {
  arrowColor: colors.black,
  arrowStyle: {padding: 0},
  // month
  monthTextColor: colors.black,
  textMonthFontSize: 16,
  textMonthFontFamily: fonts.primaryFontMedium,
  textMonthFontWeight: "bold",
  // day names
  textSectionTitleColor: colors.black,
  textDayHeaderFontSize: 12,
  textDayHeaderFontFamily: fonts.primaryFontMedium,
  textDayHeaderFontWeight: "normal",
  // today
  todayBackgroundColor: colors.primaryColorFade,
  todayTextColor: colors.primaryColor,
  // dates
  dayTextColor: colors.primaryColor,
  textDayFontSize: 18,
  textDayFontFamily: fonts.primaryFontMedium,
  textDayFontWeight: "500",
  textDayStyle: {marginTop: Platform.OS === "android" ? 2 : 4},
  // selected date
  selectedDayBackgroundColor: colors.primaryColor,
  selectedDayTextColor: colors.white,
  // disabled date
  textDisabledColor: colors.lighterGrey,
  // dot (marked date)
  dotColor: colors.primaryColor,
  selectedDotColor: colors.white,
  disabledDotColor: colors.lighterGrey,
  dotStyle: {marginTop: -2},
};
