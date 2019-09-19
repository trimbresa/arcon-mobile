import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Style
import sendBtnStyles from "./assets/styles/sendBtnStyles";

// Colors
import * as colors from "../../../global/styles/colors";

export default function SendBtn() {
  return (
    <TouchableOpacity style={sendBtnStyles.sendBtnWrapper}>
      <MaterialCommunityIcons name="send" size={25} color={colors.primaryColor}/>
    </TouchableOpacity>
  )
}
