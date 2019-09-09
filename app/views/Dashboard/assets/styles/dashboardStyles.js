import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  dashboardSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lighterGrey,
    fontFamily: "Montserrat-Medium"
  },
  contentWrapper: {
    color: colors.black,
    fontSize: 30,
    paddingHorizontal: 15,
    paddingTop: 25,
  }
});