import { StyleSheet } from "react-native";

// Globals
import * as colors from "../../../../../global/styles/colors";

export default StyleSheet.create({
  sectionItemWrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 25
  },
  sectionItemWrapperNew: {
    backgroundColor: colors.lighterGrey
  },
  sectionItemIcon: {
    height: 40,
    width: 40,
    backgroundColor: colors.secondaryColor,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  sectionItemIconLike: {
    backgroundColor: colors.primaryColor
  },
  sectionItemIconComment: {
    backgroundColor: colors.mango
  },
  sectionItemIconSchedule: {
    backgroundColor: colors.green
  },
  sectionItemIconScheduleApproved: {
    backgroundColor: colors.secondaryColor
  },
  scheduleTimeframeWrapper: {
    paddingVertical: 10
  },
  scheduleTimeframe: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 13,
    marginTop: 10,
    color: colors.black
  },
  scheduleApprovalActions: {
    flexDirection: "row",
    paddingTop: 20
  },
  scheduleApprovalBtn: {
    backgroundColor: colors.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 10
  },
  scheduleApprovalBtnLabel: {
    fontFamily: "Montserrat-Bold",
    color: colors.white
  },
  scheduleApproveBtn: {
    backgroundColor: colors.green,
    padding: 5,
  },
  scheduleRejectBtn: {
    backgroundColor: colors.red,
    padding: 5,
  },
  sectionItemText: {
    color: colors.black,
    fontSize: 16,
    flex: 1
  },
  sectionItemTextMain: {
    fontFamily: "Montserrat-Medium"
  },
  sectionItemAuthor: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat-Medium"
  },
  sectionItemTitle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Montserrat-Medium"
  },
  sectionItemTime: {
    marginTop: 4,
    color: colors.secondaryColor,
    fontSize: 12,
    fontFamily: "Montserrat-Medium"
  }
});