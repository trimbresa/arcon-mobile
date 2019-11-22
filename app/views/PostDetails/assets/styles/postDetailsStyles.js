import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  postDetailsSafeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },

  // header
  headerWrapper: {
    flex: 0,
    paddingVertical: 25,
    paddingHorizontal: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  infoWrapper: {
    paddingLeft: 15,
  },
  name: {
    width: "100%",
    fontFamily: fonts.primaryFontSemiBold,
    fontSize: 16,
  },
  time: {
    width: "100%",
    fontFamily: fonts.primaryFontMedium,
    fontSize: 14,
    color: colors.grey,
  },
  postNote: {
    width: "100%",
    fontSize: 23,
    fontFamily: fonts.primaryFontMedium,
  },
  postDetailsActions: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },

  // comments
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
});
