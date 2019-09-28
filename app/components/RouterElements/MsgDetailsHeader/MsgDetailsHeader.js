import React from "react";
import { View, TouchableOpacity } from "react-native";

// Styles
import msgDetailsHeaderStyles from "./assets/styles/msgDetailsHeaderStyles";

export default function MsgDetailsHeader(props) {
  return (
    <View
      style={msgDetailsHeaderStyles.wrapper}
    >
      <TouchableOpacity
        style={msgDetailsHeaderStyles.avatar}
        onPress={() => props.navigation.navigate("Notifications")}
      >
        <View style={msgDetailsHeaderStyles.onlineState}/>
      </TouchableOpacity>
    </View>
  )
}
