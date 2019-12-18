import React from "react";
import {View, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Colors
import * as colors from "../../../global/styles/colors";

// Styles
import notificationsBtnStyles from "./assets/styles/notificationsBtnStyles";

export default function NotificationsBtn(props) {
  return true ? (
    <View />
  ) : (
    <View style={notificationsBtnStyles.wrapper}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Notifications")}>
        <Ionicons
          name="ios-notifications"
          size={25}
          color={colors.secondaryColor}
        />
      </TouchableOpacity>
    </View>
  );
}
