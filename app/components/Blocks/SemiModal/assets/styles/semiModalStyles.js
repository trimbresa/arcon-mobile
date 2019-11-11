import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  schedulePopup: {
    paddingTop: 100,
    backgroundColor: `rgba(23, 25, 29, 0.6)`,
    flex: 1,
  },
  schedulePopupContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 20
  },
  schedulePopupHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignContent: 'center',
    paddingBottom: 10,
    justifyContent: 'center'
  },
  schedulePopupHeaderTitle: {
    fontSize: 18,
    marginLeft: 15,
    fontFamily: fonts.primaryFontSemiBold,
    flex: 1,
    alignSelf: 'center'
  },
  schedulePopupBody: {
    paddingTop: 30,
    flex: 1
  }
});