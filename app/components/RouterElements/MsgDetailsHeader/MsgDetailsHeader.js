import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

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
        {
          props.isOnline && (<View style={msgDetailsHeaderStyles.onlineState}/>)
        }
      </TouchableOpacity>
      <Text
        style={msgDetailsHeaderStyles.title}
        numberOfLines={1}
      >{props.title}</Text>
    </View>
  )
}
