import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingBottom: 5,
    flexDirection: "row"
  },
  lastWrapper: {
    marginTop: 20
  },
  avatarWrapper: {
    paddingRight: 10,
    alignSelf: "flex-end",
    minWidth: 40
  },
  avatarRight: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32
  },
  textWrapper: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    flexShrink: 1
  },
  lastTextOutWrapper: {
    borderBottomLeftRadius: 0
  },
  lastTextInWrapper: {
    borderBottomRightRadius: 0
  },
  ingoingTxtWrapper: {
    backgroundColor: colors.primaryColor
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.primaryFontMedium
  },
  ingoingText: {
    color: colors.white,
    textAlign: "right"
  }
});