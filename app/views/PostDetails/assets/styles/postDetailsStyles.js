import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  postDetailsSafeArea: {
    flex: 1
  },
  keyboardAvoidingView: {
    flex: 1
  },
  postDetailsMediaWrapper: {
    height: 200,
    backgroundColor: colors.primaryColor,
  },
  postDetailsMedia: {
    flexGrow: 1,
    paddingVertical: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postDetailsActions: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey
  },
  postComments: {
    flexGrow: 1,
    flex: 1,
  },
  commentsWrapper: {
    flexGrow: 1,
    fontFamily: fonts.primaryFontMedium,
  },
  commentsReplies: {
    paddingLeft: 40,
  },
  video: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  postBody: {
    paddingTop: 15,
    paddingBottom: 5,
    // alignItems: "center",
    // justifyContent: "center",
  },
  postBodyTxt: {
    fontSize: 30,
    fontFamily: fonts.primaryFontMedium,
    color: colors.white,
  },
  postBodyMedia: {
    height: 60,
    backgroundColor: colors.lightGrey,
    overflow: "hidden",
  },
  listFooter: {
    flex: 1
  }
});
