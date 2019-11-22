import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  schedulePopup: {
    paddingTop: 100,
    backgroundColor: `rgba(23, 25, 29, 0.6)`,
    flex: 1,
  },
  exitWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  schedulePopupContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  schedulePopupHeader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  schedulePopupHeaderTitle: {
    fontSize: 18,
    marginLeft: 5,
    fontFamily: fonts.primaryFontSemiBold,
    flex: 1,
    alignSelf: "center",
  },
  schedulePopupBody: {
    paddingTop: 10,
    flex: 1,
  },
});
