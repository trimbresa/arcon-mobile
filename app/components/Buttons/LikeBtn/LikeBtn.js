import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, Text, Animated, Easing} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

// Styles
import likeBtnStyles from "./assets/styles/likeBtnStyles";
import {secondaryColor, primaryColor, red} from "../../../global/styles/colors";
import PostService from "../../../services/PostService";

const LikeBtn = ({liked, postId, size, likes}) => {
  const [localLiked, setLocalLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);
  const [scale] = useState(new Animated.Value(0));

  useEffect(() => {
    setLocalLiked(liked);
    setLocalLikes(likes);
  }, [liked, likes]);

  const likePost = async () => {
    if (localLiked) await PostService.unLikePost(postId);
    else await PostService.likePost(postId);

    setLocalLikes(p => (localLiked ? p - 1 : p + 1));
    setLocalLiked(!localLiked);

    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  };

  const color = localLiked ? primaryColor : secondaryColor;

  const animatePress = () => {
    Animated.timing(scale, {
      toValue: -1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: scale.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [0.9, 1, 1.1],
            }),
          },
        ],
      }}>
      <TouchableOpacity
        onPressIn={animatePress}
        activeOpacity={0.7}
        onPress={likePost}
        style={likeBtnStyles.likeBtn}>
        <AntDesign
          name={localLiked ? "like1" : "like2"}
          size={size}
          color={color}
        />
        <Text
          style={[
            likeBtnStyles.likesSpan,
            {
              fontSize: 15,
              color,
            },
          ]}>
          {localLikes}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

LikeBtn.defaultProps = {
  liked: false,
  likes: 0,
  color: secondaryColor,
  size: 20,
  activeColor: primaryColor,
  likesTextSize: 15,
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
