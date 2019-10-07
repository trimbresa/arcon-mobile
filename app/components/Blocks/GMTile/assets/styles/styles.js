import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";
import { shadow } from "../../../../../global/styles/globalStyles";

export default StyleSheet.create({
  gmCard: {
    ...shadow,
    height: 150,
    width: 160,
    backgroundColor: colors.white,
    marginBottom: 10,
    padding: 20 ,
    flexDirection: 'column',
    borderRadius: 8,
  },
  gmCardTitle: {
    fontFamily: fonts.primaryFontMedium,
    textTransform: 'uppercase',
    fontSize: 11,
    color: colors.secondaryColor
  },
  gmCardProgress: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gmCardProgressNr: {
    fontFamily: fonts.primaryFontSemiBold,
    marginBottom: 5,
    fontSize: 24
  }
});