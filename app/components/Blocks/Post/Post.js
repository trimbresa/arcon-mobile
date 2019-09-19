import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Video from "react-native-video";

// Components
import LikeBtn from "../../Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../Buttons/CommentBtn/CommentBtn";

// Helpers
import ObjectHelper from "../../../helpers/ObjectHelper";
import DateHelper from "../../../helpers/DateHelper";

// Styles
import postStyles from "./assets/styles/postStyles";

const Post = (props) => {
  const { media = {} } = props;

  const image = media.image && (
    <ImageBackground
      source={{ uri: media.image }}
      style={postStyles.image}
    />
  );

  const video = media.video && (
    <Video
      source={{uri: media.video}}
      controls={false}
      playInBackground={false}
      style={postStyles.video}
      paused={true}
    />
  );

  return (
    <View
      style={postStyles.postWrapper}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onDetailsPress}
        style={postStyles.postHeader}
      >
        <View style={postStyles.postAvatar}>
          <ImageBackground
            source={{ uri: props.avatar }}
            style={postStyles.postAvatarMedia}
          />
        </View>
        <View style={postStyles.postHeaderTxt}>
          <Text
            numberOfLines={1}
            style={postStyles.postHeaderTitle}
          >
            { props.title }
          </Text>
          <Text
            style={postStyles.postHeaderTime}
          >
            { DateHelper.formatFromNow(props.timestamp) }
          </Text>
        </View>
      </TouchableOpacity>
      <View style={postStyles.postBody}>
        <Text style={postStyles.postBodyTxt}>
          {props.description}
        </Text>
        {
          ObjectHelper.objNotNull(props.media) && (
            <View style={postStyles.postBodyMedia}>
              {image}
              {video}
            </View>
          )
        }
      </View>
      <View style={postStyles.postFooter}>
        <LikeBtn
          liked={props.liked}
          onPress={props.onLike}
          likes={props.likes}
        />
        <CommentBtn
          onPress={props.onComment}
          comments={props.comments}
        />
      </View>
    </View>
  );
};

Post.defaultProps = {
  title: "Post",
  onDetailsPress: () => alert("Method not implemented!"),
  avatar: "",
  description: "",
  liked: false,
  likes: 0,
  comments: 0,
  onLike: () => alert("Like!"),
  onComment: () => alert("Comment!"),
};

Post.propTypes = {
  title: PropTypes.string,
  onDetailsPress: PropTypes.func,
  avatar: PropTypes.string,
  description: PropTypes.string,
  liked: PropTypes.bool,
  likes: PropTypes.number,
  comments: PropTypes.number,
  onLike: PropTypes.func,
  onComment: PropTypes.func,
};

export default Post;
