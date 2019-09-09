import React from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Colors
import * as colors from "../../../global/styles/colors";

export default function NotificationsBtn(props) {
  return (
    <View
      style={{
        flex: 1,
        width: 60,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Notifications")}
      >
        <Ionicons name="ios-notifications-outline" size={30} color={colors.secondaryColor} />
      </TouchableOpacity>
    </View>
  )
}
