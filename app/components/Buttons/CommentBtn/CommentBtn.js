import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Styles
import commentBtnStyles from "./assets/styles/commentBtnStyles";
import {secondaryColor} from "../../../global/styles/colors";

const CommentBtn = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={commentBtnStyles.commentBtn}>
      <MaterialCommunityIcons
        name="comment-outline"
        size={props.size}
        color={props.color}
      />
      <Text
        style={[
          commentBtnStyles.commentsSpan,
          {
            fontSize: props.commentsTextSize,
            color: props.color
          }
        ]}>
        {props.comments}
      </Text>
    </TouchableOpacity>
  );
};

CommentBtn.defaultProps = {
  comments: 0,
  color: secondaryColor,
  size: 20,
  commentsTextSize: 15,
  onPress: () => alert("onPress method is missing!"),
};

CommentBtn.propTypes = {
  comments: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  commentsTextSize: PropTypes.number,
  onPress: PropTypes.func,
};

export default CommentBtn;
