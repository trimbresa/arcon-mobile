import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import {View, Text, TouchableOpacity, ImageBackground} from "react-native";
import {WebView} from "react-native-webview";
import {withNavigation} from "react-navigation";
import Media from "../Media";

// Components
import LikeBtn from "../../Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../Buttons/CommentBtn/CommentBtn";

// Helpers
import ObjectHelper from "../../../helpers/ObjectHelper";
import DateHelper from "../../../helpers/DateHelper";

// Styles
import postStyles from "./assets/styles/postStyles";
import * as colors from "../../../global/styles/colors";

const Post = ({post, navigation}) => {
  const {
    id,
    attachment = {},
    onDetailsPress,
    avatar,
    firstName,
    lastName,
    createdOn,
    note,
    liked,
    likes,
    comments,
  } = post;

  const onComment = () => {
    navigation.navigate("PostDetails", {post});
  };

  return (
    <View style={postStyles.postWrapper}>
      <TouchableOpacity
        activeOpacity={onDetailsPress ? 0.6 : 1}
        onPress={onDetailsPress}
        style={postStyles.postHeader}>
        <View style={postStyles.postAvatar}>
          {avatar ? (
            <ImageBackground
              source={{uri: avatar}}
              style={postStyles.postAvatarMedia}
            />
          ) : (
            <Text style={postStyles.avatarInitials}>
              {firstName[0]} {lastName[0]}
            </Text>
          )}
        </View>
        <View style={postStyles.postHeaderTxt}>
          <Text numberOfLines={1} style={postStyles.postHeaderTitle}>
            {firstName} {lastName}
          </Text>
          <Text style={postStyles.postHeaderTime}>
            {DateHelper.formatFromNow(createdOn)}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={postStyles.postBody}>
        <Text style={postStyles.postBodyTxt}>{note}</Text>

        {attachment.length > 0 && <Media attachment={attachment[0]} />}
      </View>

      <View style={postStyles.postFooter}>
        <LikeBtn liked={!!liked} postId={id} likes={likes} />
        <CommentBtn onPress={onComment} comments={comments} />
      </View>
    </View>
  );
};

Post.defaultProps = {};

Post.propTypes = {
  post: PropTypes.object,
};

export default withNavigation(Post);
