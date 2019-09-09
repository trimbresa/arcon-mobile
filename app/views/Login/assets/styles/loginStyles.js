import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  homeSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white
  },
  homeWrapper: {
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 40
  },
  text: {
    color: colors.black,
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Montserrat-Medium"
  }
});