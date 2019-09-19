import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";

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
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  schedulePopupBody: {
    paddingTop: 30,
    flex: 1
  }
});