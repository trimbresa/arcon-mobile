import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import Video from "react-native-video";

// Components
import LikeBtn from "../../Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../Buttons/CommentBtn/CommentBtn";

// Helpers
import ObjectHelper from "../../../helpers/ObjectHelper";
import DateHelper from "../../../helpers/DateHelper";

// Styles
import msgTextStyles from "./assets/styles/msgTextStyles";

const Post = (props) => {
  return (
    <View
      style={[
        msgTextStyles.wrapper,
        !props.outgoingMsg && msgTextStyles.avatarRight,
        props.lastText && msgTextStyles.lastWrapper,
      ]}
    >
      {
        props.outgoingMsg && (
          <View style={msgTextStyles.avatarWrapper}>
            {props.lastText && (<Image
              style={msgTextStyles.avatar}
              source={
                props.avatar ? {
                  uri: props.avatar
                } : require("../../Lists/MsgItem/assets/images/avatar.png")
              }
            />)}
          </View>
        )
      }
      <View style={[
        msgTextStyles.textWrapper,
        !props.outgoingMsg && msgTextStyles.ingoingTxtWrapper,
        props.lastText && !props.outgoingMsg && msgTextStyles.lastTextInWrapper,
        props.lastText && props.outgoingMsg && msgTextStyles.lastTextOutWrapper
      ]}>
        <Text style={[msgTextStyles.text, !props.outgoingMsg && msgTextStyles.ingoingText]}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

Post.defaultProps = {
  text: "Post",
  outgoingMsg: true,
  lastText: false,
  avatar: ""
};

Post.propTypes = {
  text: PropTypes.string,
  outgoingMsg: PropTypes.bool,
  lastText: PropTypes.bool,
  avatar: PropTypes.string,
};

export default Post;
