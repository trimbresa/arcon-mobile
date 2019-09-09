import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";

export default StyleSheet.create({
  postWrapper: {
    marginBottom: 20,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  postAvatar: {
    backgroundColor: colors.lightGrey,
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 10
  },
  postAvatarMedia: {
    flex: 1
  },
  postHeaderTxt: {},
  postHeaderTitle: {
    fontSize: 20
  },
  postHeaderTime: {
    color: colors.secondaryColor
  },
  postBody: {
    paddingTop: 15,
    paddingBottom: 5
  },
  postBodyTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: colors.black
  },
  postBodyMedia: {
    height: 172,
    marginTop: 15,
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
    overflow: "hidden"
  },
  postFooter: {
    paddingTop: 15,
    flexDirection: "row"
  },
  video: {
    flex: 1
  },
  image: {
    flex: 1
  }
});