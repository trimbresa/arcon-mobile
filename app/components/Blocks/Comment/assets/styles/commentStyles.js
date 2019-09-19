import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";

export default StyleSheet.create({
  comment: {
    flexDirection: "row",
    padding: 16,
    // marginBottom: 20
  },
  commentText: {
    
  },
  commentAvatar: {
    marginRight: 10,
    height: 40,
    width: 40,
    backgroundColor: colors.secondaryColor,
    borderRadius: 40
  },
  commentTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 15
  },
  commentDescription: {
    fontFamily: "Montserrat-Medium",
    fontSize: 13
  },
  commentActions: {
    flexDirection: "row",
    paddingTop: 10
  }
});