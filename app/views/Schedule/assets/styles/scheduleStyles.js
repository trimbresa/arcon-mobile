import {StyleSheet} from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";
import * as fonts from "../../../../global/styles/fonts";

export default StyleSheet.create({
  scheduleSafarea: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  scheduleWrapper: {
    flex: 1,
    padding: 30,
  },
  activeTabTintColor: {
    color: colors.primaryColor,
  },
  tabBartab: {
    fontFamily: fonts.primaryFontSemiBold,
  },
  tabBar: {
    backgroundColor: colors.white,
  },
  tabBarTabLabel: {
    fontFamily: fonts.primaryFontSemiBold,
  },
  indicatorStyle: {
    backgroundColor: colors.primaryColor
  },
  item: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    fontFamily: fonts.primaryFontLight,
  },
  itemLabel: {
    fontFamily: fonts.primaryFontMedium,
    color: colors.secondaryColor
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.white
  },

  // Custom calendar
  calendar: {
    paddingLeft: 20, 
    paddingRight: 20
  },
  section: {
    backgroundColor: '#f0f4f7', 
    color: colors.primaryColor
  },
  item: {
    padding: 20, 
    backgroundColor: colors.white, 
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0', 
    flexDirection: 'row'
  },
  itemHourText: {
    color: colors.black
  },
  itemDurationText: {
    color: colors.black, 
    fontSize: 12, 
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: colors.black, 
    marginLeft: 16, 
    fontWeight: 'bold', 
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1, 
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52, 
    justifyContent: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#e8ecf0' 
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14
  }
});
