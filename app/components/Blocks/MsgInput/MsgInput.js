import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Styles
import msgInputStyles from "./assets/styles/msgInputStyles";
import * as colors from "../../../global/styles/colors";

const MsgInput = (props) => {
  return (
    <View
      style={msgInputStyles.wrapper}
    >
      <TextInput
        style={msgInputStyles.input}
        placeholder={props.placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically={true}
        multiline={true}
        // numberOfLines={6}
      />
      <TouchableOpacity style={msgInputStyles.sendBtn}>
        <Ionicons name="ios-send" size={28} color={colors.primaryColor}/>
      </TouchableOpacity>
    </View>
  );
};

MsgInput.defaultProps = {
  placeholder: "Type something here…",
};

MsgInput.propTypes = {
  placeholder: PropTypes.string,
};

export default MsgInput;
