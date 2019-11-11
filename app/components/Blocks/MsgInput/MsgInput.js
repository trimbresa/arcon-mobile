import React, {useState} from "react";
import PropTypes from "prop-types";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Styles
import msgInputStyles from "./assets/styles/msgInputStyles";
import * as colors from "../../../global/styles/colors";

const MsgInput = props => {
  return (
    <View style={msgInputStyles.wrapper}>
      <TextInput
        style={msgInputStyles.input}
        placeholder={props.placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      {props.isLoading ? (
        <TouchableOpacity activeOpacity={1} style={msgInputStyles.sendBtn}>
          <ActivityIndicator/>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.onSend} style={msgInputStyles.sendBtn}>
          <Ionicons
            name={props.icon ? props.icon : "ios-send"}
            size={28}
            color={colors.primaryColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

MsgInput.defaultProps = {
  placeholder: "Type something here…",
};

MsgInput.propTypes = {
  placeholder: PropTypes.string,
  onSend: PropTypes.func,
};

export default MsgInput;
