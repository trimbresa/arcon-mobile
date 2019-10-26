import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default {
  arrowColor: colors.black,
  arrowStyle: {padding: 0},
  monthTextColor: colors.black,
  textMonthFontSize: 16,
  textMonthFontFamily: fonts.primaryFontMedium,
  textMonthFontWeight: "bold",
  textSectionTitleColor: colors.black,
  textDayHeaderFontSize: 12,
  textDayHeaderFontFamily: fonts.primaryFontMedium,
  textDayHeaderFontWeight: "normal",
  todayBackgroundColor: colors.primaryColorFade,
  todayTextColor: colors.primaryColor,
  dayTextColor: colors.primaryColor,
  textDayFontSize: 18,
  textDayFontFamily: fonts.primaryFontMedium,
  textDayFontWeight: "500",
  textDayStyle: {marginTop: Platform.OS === "android" ? 2 : 4},
  selectedDayBackgroundColor: colors.primaryColor,
  selectedDayTextColor: colors.white,
  textDisabledColor: colors.lighterGrey,
  dotColor: colors.primaryColor,
  selectedDotColor: colors.white,
  disabledDotColor: colors.lighterGrey,
  dotStyle: {marginTop: -2, marginBottom: 15},
  agendaDayTextColor: colors.secondaryColor,
  agendaDayNumColor: colors.secondaryColor,
  agendaTodayColor: colors.primaryColor,
  agendaKnobColor: colors.lighterGrey,
  indicatorColor: colors.primaryColor
};
