import React, { Component } from "react";
import { TouchableOpacity, TouchableHighlight, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Styles
import todaysScheduleStyles from "./assets/styles/todaysScheduleStyles";
import * as colors from "../../../global/styles/colors";

export default class TodaysSchedule extends Component {
  render() {
    return (
      <TouchableHighlight
        style={todaysScheduleStyles.scheduleWrapper}
        underlayColor={colors.lightGrey}
        onPress={() => alert("Clicked")}
      >
        <>
          <MaterialCommunityIcons
            name="clock"
            color={colors.secondaryColor}
            size={30}
            style={todaysScheduleStyles.icon}
          />
          <Text
            style={todaysScheduleStyles.scheduleText}
            numberOfLines={1}
          >{this.props.text}</Text>
        </>
      </TouchableHighlight>
    )
  }
}
