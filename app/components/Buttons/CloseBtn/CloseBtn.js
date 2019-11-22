import React from "react";
import {TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Style
import closeBtnStyles from "./assets/styles/closeBtnStyles";

// Colors
import * as colors from "../../../global/styles/colors";

export default function CloseBtn(props) {
  return (
    <TouchableOpacity
      style={closeBtnStyles.closeBtnWrapper}
      onPress={() => props.navigation.goBack(null)}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={27}
        color={colors.secondaryColor}
      />
    </TouchableOpacity>
  );
}
