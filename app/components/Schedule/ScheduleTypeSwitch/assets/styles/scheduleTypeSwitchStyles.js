import {StyleSheet, Dimensions} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

const width = Dimensions.get("screen").width * 0.8;

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 7,
    backgroundColor: colors.white,
  },
  switchContainer: {
    width,
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 38,
    paddingVertical: 3,
    flexDirection: "row",
  },
  switchItem: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  switchItemText: {
    color: colors.primaryColor,
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 11,
    textTransform: "uppercase",
  },
  switchIndicator: {
    opacity: 0.5,
    position: "absolute",
    left: 3,
    top: 3,
    borderRadius: 4,
    width: width / 2 - 6,
    height: "100%",
    backgroundColor: colors.primaryColorFade,
  },
});
