import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  postDetailsWrapper: {
    // fontFamily: "Montserrat-Medium",
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
    fontFamily: "Montserrat-Medium",
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
    fontFamily: "Montserrat-Medium",
    color: colors.white,
  },
  postBodyMedia: {
    // height: 60,
    backgroundColor: colors.lightGrey,
    // overflow: "hidden"
  },
});