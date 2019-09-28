import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Styles
import noMsgItemStyles from "./assets/styles/noMsgItemStyles";
import * as colors from "../../../global/styles/colors";

export default function NoMsgItem() {
  return (
    <View style={noMsgItemStyles.wrapper}>
      <MaterialCommunityIcons name="comment-text-multiple-outline" size={40} color={colors.black} />
      <Text style={noMsgItemStyles.text}>No messages yet.</Text>
    </View>
  )
}
