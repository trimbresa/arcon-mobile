import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../global/styles/colors";

export default StyleSheet.create({
  myEmpScheduleSafarea: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  myEmpScheduleWrapper: {
    flex: 1,
    padding: 30,
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