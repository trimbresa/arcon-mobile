import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  scheduleSafarea: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  switchContainer: {
    flexDirection: "row",
    height: 40,
    borderBottomColor: colors.lighterGrey,
    borderBottomWidth: 1,
  },
  switchItem: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  switchItemText: {
    color: colors.primaryColor,
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 12,
    textTransform: "uppercase",
  },
  switchIndicator: {
    position: "absolute",
    bottom: -1,
    left: 0,
    width: "50%",
    height: 1,
    backgroundColor: colors.primaryColor,
  },
});
