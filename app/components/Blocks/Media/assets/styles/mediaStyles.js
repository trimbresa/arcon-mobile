import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    marginTop: 15,
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
  },
  documentWrapper: {
    width: "100%",
    height: 30,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  documentName: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
    flex: 1,
    marginHorizontal: 8,
  },
  video: {
    width: "100%",
    height: 172,
  },
  image: {
    height: 172,
  },
});
