import {StyleSheet, Dimensions, StatusBar} from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";
import * as fonts from "../../../../../global/styles/fonts";

export default StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - StatusBar.currentHeight,
  },
  closeArea: {
    width: "100%",
    height: "5%",
  },
  container: {
    backgroundColor: colors.white,
    width: "100%",
    height: "95%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topContainer: {
    padding: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontFamily: fonts.primaryFontBold,
    fontSize: 25,
  },

  // clear all button
  clearAllFiltersBtn: {
    backgroundColor: colors.red,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: 30,
  },
  clearAllFiltersBtnText: {
    fontFamily: fonts.primaryFontSemiBold,
    color: colors.white,
    marginLeft: 10,
    fontSize: 13,
  },

  // switch
  switchContainer: {
    alignSelf: "center",
    marginVertical: 15,
    flexDirection: "row",
    width: "60%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.darkGrey,
    padding: 2,
  },
  switchItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  switchItemSelected: {
    backgroundColor: colors.darkGrey,
  },
  switchItemText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.darkGrey,
  },
  switchItemSelectedText: {
    color: colors.white,
  },

  list: {
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  // inputs
  row: {
    marginBottom: 50,
  },
  title: {
    fontFamily: fonts.primaryFontMedium,
    fontSize: 15,
    marginBottom: 10,
  },
  bigContainer: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
  },
  inputContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    fontFamily: fonts.primaryFontMedium,
    paddingHorizontal: 15,
    flex: 1,
    paddingVertical: 0,
  },
  clearInputBtn: {
    width: 24,
    height: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrey,
  },
  actionsContainer: {
    height: 25,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  selectedOptionsText: {
    fontSize: 10,
    fontFamily: fonts.primaryFontSemiBold,
  },
  clearAllBtn: {
    paddingHorizontal: 7,
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkGrey,
    borderRadius: 10,
    marginVertical: 2,
  },

  loadingIndicator: {
    marginVertical: 10,
  },

  optionList: {
    flex: 1,
    maxHeight: 150,
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  firstOption: {
    borderTopWidth: 0,
  },
  selectedOption: {
    backgroundColor: colors.primaryColorFade,
    borderTopColor: colors.primaryColor,
  },
  optionText: {
    fontFamily: fonts.primaryFontMedium,
    // color: colors.darkGrey,
  },
  noOptionsText: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.darkGrey,
  },
  selectedOptionText: {
    color: colors.primaryColor,
  },

  // buttons
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  button: {
    elevation: 4,
    height: "100%",
    borderRadius: 30,
    paddingHorizontal: 25,
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelBtn: {
    backgroundColor: colors.red,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 13,
    letterSpacing: 1.3,
    fontFamily: fonts.primaryFontBold,
    textTransform: "uppercase",
    color: colors.white,
  },
});
