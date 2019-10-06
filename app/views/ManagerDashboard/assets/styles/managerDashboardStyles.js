import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";
import {shadow} from "../../../../global/styles/globalStyles";

export default StyleSheet.create({
  gmWrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  gmDetails: {
    flex: 1,
  },
  gmChartWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gmChart: {
    height: 220,
    width: 210,
    position: "relative",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gmChartData: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  gmChartPercent: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 40
  },
  gmChartLabel: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 11,
    textTransform: 'uppercase',
    color: colors.secondaryColor
  },
  gmTitleWrapper: {
    alignItems: "center",
  },
  gmTitle: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 24,
  },
  gmCardsWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
});
