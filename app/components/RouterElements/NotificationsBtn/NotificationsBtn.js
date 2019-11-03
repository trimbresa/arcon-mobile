import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Colors
import * as colors from "../../../global/styles/colors";

// Styles
import notificationsBtnStyles from "./assets/styles/notificationsBtnStyles";

export default function NotificationsBtn(props) {
  return (
    <View
      style={notificationsBtnStyles.wrapper}
    >
      {/* <TouchableOpacity
        // onPress={() => props.navigation.navigate("Notifications")}
        onPress={() => console.log("...")}
      >
        <Ionicons name="ios-notifications-outline" size={30} color={colors.secondaryColor} />
      </TouchableOpacity> */}
    </View>
  )
}
