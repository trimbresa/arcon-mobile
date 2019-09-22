import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  postDetailsWrapper: {
    // fontFamily: fonts.primaryFontMedium,
  },
  postDetailsMedia: {
    height: 210,
    // alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: colors.secondaryColor,
  },
  postDetailsActions: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  postComments: {
    // flex: 1
    // flexGrow: 1,
    //     flex: 1,
  },
  commentsWrapper: {
    // height: 368,
    // flexGrow: 1,
    // borderWidth: 2,
    fontFamily: fonts.primaryFontMedium,
  },
  commentsReplies: {
    paddingLeft: 40
  },
  video: {
    flex: 1
  },
  image: {
    flex: 1
  },
  postBody: {
    // paddingTop: 15,
    paddingBottom: 5,
    // alignItems: "center",
    // justifyContent: "center"
  },
  postBodyTxt: {
    fontSize: 30,
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
  },
  postBodyMedia: {
    // height: 60,
    backgroundColor: colors.lightGrey,
    // overflow: "hidden"
  },
});