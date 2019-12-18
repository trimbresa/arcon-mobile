import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as yup from "yup";

// Styles
import msgInputStyles from "./assets/styles/msgInputStyles";
import * as colors from "../../../global/styles/colors";
import FlashMessageHelper from "../../../helpers/FlashMessageHelper";
import Attachment from "../Attachment";

const MsgInput = ({isSubmitting, icon, onSend}) => {
  const [attachment, setAttachment] = useState(null);
  const [note, setNote] = useState("");

  const onSendLocal = useCallback(() => {
    const submit = () => {
      onSend({note, attachment});
      setNote("");
      setAttachment(false);
    };

    if (note) {
      if (attachment.type === "url")
        yup
          .string()
          .url()
          .validate(attachment.url)
          .then(submit)
          .catch(() =>
            FlashMessageHelper.dangerMessage("Please enter a valid url"),
          );
      else submit();
    } else
      FlashMessageHelper.dangerMessage(
        "Please write a comment before you submit",
      );
  }, [note, attachment, onSend]);

  return (
    <View style={msgInputStyles.wrapper}>
      <Attachment
        style={{
          paddingLeft: "3%",
          paddingRight: attachment ? "3%" : "0%",
          backgroundColor: colors.white,
        }}
        attachment={attachment}
        onChangeAttachment={a => setAttachment(a)}
      />
      <View style={msgInputStyles.inputWrapper}>
        <TextInput
          style={msgInputStyles.input}
          placeholder="Post a comment..."
          autoCapitalize="none"
          autoCorrect={false}
          multiline={true}
          value={note}
          editable={!isSubmitting}
          onChangeText={t => setNote(t)}
        />
        <View style={msgInputStyles.actionsWrapper}>
          <TouchableOpacity
            disabled={note.length === 0}
            onPress={onSendLocal}
            style={msgInputStyles.sendBtn}>
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Ionicons
                name={icon ? icon : "ios-send"}
                size={28}
                color={note.length > 0 ? colors.primaryColor : colors.grey}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
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
