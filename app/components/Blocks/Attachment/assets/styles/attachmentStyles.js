import {StyleSheet} from "react-native";

// Colors
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  attachmentsWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 40,
    minHeight: 40,
    height: 40,
  },
  attachment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lighterGrey,
    height: "100%",
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  attachmentText: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.primaryFontMedium,
    color: colors.darkGrey,
  },
  urlInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 0,
    fontFamily: fonts.primaryFontMedium,
  },
  selectedAttachmentExitBtn: {
    flex: 1,
    maxWidth: 40,
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lighterGrey,
  },
});
