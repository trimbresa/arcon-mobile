import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

// Styles
import sectionItemStyles from "./assets/styles/sectionItemStyles";
import * as colors from "../../../global/styles/colors";

export default function SectionItem(props) {
  const itemType = type => {
    switch (type) {
      case "like":
        return (
          <View
            style={[
              sectionItemStyles.sectionItemIcon,
              sectionItemStyles.sectionItemIconLike,
            ]}>
            <AntDesign name="like1" size={23} color={colors.white} />
          </View>
        );
      case "comment":
        return (
          <View
            style={[
              sectionItemStyles.sectionItemIcon,
              sectionItemStyles.sectionItemIconComment,
            ]}>
            <MaterialCommunityIcons
              name="comment"
              size={23}
              color={colors.white}
            />
          </View>
        );
      case "schedule":
        return (
          <View
            style={[
              sectionItemStyles.sectionItemIcon,
              sectionItemStyles.sectionItemIconSchedule,
              !props.approved &&
                sectionItemStyles.sectionItemIconScheduleApproved,
            ]}>
            <Ionicons
              name={props.approved ? "md-checkmark-circle" : "md-clock"}
              size={23}
              color={colors.white}
            />
          </View>
        );
      default:
        return <AntDesign name="like1" size={23} />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        sectionItemStyles.sectionItemWrapper,
        props.newNotif && sectionItemStyles.sectionItemWrapperNew,
      ]}>
      {itemType(props.type)}
      <View style={sectionItemStyles.sectionItemText}>
        <Text style={sectionItemStyles.sectionItemTextMain} numberOfLines={2}>
          <Text style={sectionItemStyles.sectionItemAuthor}>
            {`${props.author} `}
          </Text>
          <Text style={sectionItemStyles.sectionItemTitle}>{props.title}</Text>
        </Text>
        {props.type === "schedule" && (
          <View style={sectionItemStyles.scheduleTimeframeWrapper}>
            <Text style={sectionItemStyles.scheduleTimeframe}>
              {props.scheduleInfo.startDate}
              {` - `}
              {props.scheduleInfo.endDate}
            </Text>
            {!props.approved && (
              <View style={sectionItemStyles.scheduleApprovalActions}>
                <TouchableOpacity
                  style={[
                    sectionItemStyles.scheduleApprovalBtn,
                    sectionItemStyles.scheduleApprovalBtn,
                  ]}>
                  <Text style={sectionItemStyles.scheduleApprovalBtnLabel}>
                    Approve
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    sectionItemStyles.scheduleApprovalBtn,
                    sectionItemStyles.scheduleRejectBtn,
                  ]}>
                  <Text style={sectionItemStyles.scheduleApprovalBtnLabel}>
                    Reject
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        <Text style={sectionItemStyles.sectionItemTime}>{props.timeStamp}</Text>
      </View>
    </TouchableOpacity>
  );
}
