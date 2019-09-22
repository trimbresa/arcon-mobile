import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  newPostSafeArea: {
    flex: 1
  },
  newPost: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.white
  },
  // newPostWrapper: {
  //   flex: 1,
  // },
  newPostInput: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    fontFamily: fonts.primaryFontMedium
  },
  newPostWrapper: {
    paddingVertical: 20
  },
  newPostPreview: {
    marginBottom: 20,
    paddingHorizontal: 15
  },
  newPostPreviewMedia: {
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 15
  },
  newPostPreviewImage: {
    width: 106,
    height: 106,
    borderRadius: 6,
    padding: 6,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  deleteBtn: {
    height: 20,
    width: 20,
    backgroundColor: colors.black,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  newPostFooter: {
    marginTop: 100,
    paddingHorizontal: 15
  },
  newPostTypeLabel: {
    flexDirection: "row",
    alignItems: "center",
    width: 92,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: colors.lightGrey
  },
  newPostTypeLabelActive: {
    backgroundColor: colors.lightGrey,

  },
  newPostTypeLabelText: {
    textAlign: "center",
    marginLeft: 5
  }
});