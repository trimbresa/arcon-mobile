import {StyleSheet} from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: "100%",
  },
  newPostInput: {
    flex: 1,
    color: colors.black,
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    textAlignVertical: "top",
    fontFamily: fonts.primaryFontMedium,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.lighterGrey,
  },
  newPostLocationLabel: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 12,
    color: colors.secondaryColor,
  },
  locationPicker: {
    marginBottom: 10,
  },
  fieldMsg: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.red,
  },
  newPostPreview: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  newPostPreviewMedia: {
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 15,
  },
  newPostPreviewImage: {
    width: 106,
    height: 106,
    borderRadius: 6,
    padding: 6,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },

  // submit button
  submitBtn: {
    flexDirection: "row",
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnLabel: {
    fontSize: 16,
    marginRight: 7,
    color: colors.white,
    fontFamily: fonts.primaryFontMedium,
  },
});
