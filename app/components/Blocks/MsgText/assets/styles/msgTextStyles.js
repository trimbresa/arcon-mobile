import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  incomingWrapper: {
    justifyContent: "flex-start",
    marginLeft: 40,
  },
  lastIncomingWrapper: {
    marginLeft: 0,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
    backgroundColor: colors.lighterGrey,
    overflow: "hidden",
  },
  textWrapper: {
    alignItems: "flex-end",
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    flexShrink: 1,
    maxWidth: "70%",
  },
  incomingTextWrapper: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: colors.primaryColor,
    marginRight: 5,
  },
  outgoingTextWrapper: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginLeft: 5,
  },
  lastTextWrapper: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  firstTextWrapper: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.primaryFontMedium,
  },
  incomingText: {
    color: colors.white,
  },
  timestamp: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.grey,
    fontSize: 9,
    alignSelf: "flex-end",
    marginBottom: 2,
  },
  dateIndicator: {
    textAlign: "center",
    fontFamily: fonts.primaryFontSemiBold,
    marginVertical: 30,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: colors.primaryColorFade,
    color: colors.primaryColor,
    fontSize: 12,
  },
});
