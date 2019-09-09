import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

// Styles
import likeBtnStyles from "./assets/styles/likeBtnStyles";
import {secondaryColor, primaryColor, red} from "../../../global/styles/colors";

const LikeBtn = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={likeBtnStyles.likeBtn}>
      <AntDesign
        name={props.liked ? "like1" : "like2"}
        size={props.size}
        color={props.liked ? props.activeColor : props.color}
      />
      <Text
        style={[
          likeBtnStyles.likesSpan,
          {
            fontSize: props.likesTextSize,
            color: props.liked ? props.activeColor : props.color
          }
        ]}>
        {props.likes}
      </Text>
    </TouchableOpacity>
  );
};

LikeBtn.defaultProps = {
  liked: false,
  likes: 0,
  color: secondaryColor,
  size: 20,
  activeColor: primaryColor,
  likesTextSize: 15,
  onPress: () => alert("onPress method is missing!"),
};

LikeBtn.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  activeColor: PropTypes.string,
  likesTextSize: PropTypes.number,
  onPress: PropTypes.func,
};

export default LikeBtn;
