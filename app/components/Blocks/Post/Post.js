import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Video from "react-native-video";
import { WebView } from 'react-native-webview';

import {aws_bucket} from "../../../config/api.json";

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
      source={{ uri: `${aws_bucket}/${media.image}` }}
      style={postStyles.image}
    />
  );

  // const video = media["video/link"] && (
  //   <Video
  //     source={{uri: media["video/link"]}}
  //     controls={false}
  //     playInBackground={false}
  //     style={postStyles.video}
  //     paused={true}
  //   />
  // );

  const video = media["video/link"] && (
    // <Video
    //   source={{uri: media["video/link"]}}
    //   controls={false}
    //   playInBackground={false}
    //   style={postStyles.video}
    //   paused={true}
    // />
    <View style={{ flex: 1, borderRadius: 6, overflow: 'hidden' }}>
      <WebView
        javaScriptEnabled={true}
        style={{ borderRadius: 6 }}
        source={{ html:
          `<html><body><iframe width='100%' height='100%'
            src='${media["video/link"].replace('watch', 'embed')}'
            frameborder='0'
            allowfullscreen></iframe>
            </body>
          </html>`
        }}
      />
    </View>
  );

  return (
    <View
      style={postStyles.postWrapper}
    >
      <TouchableOpacity
        activeOpacity={props.onDetailsPress ? 0.6 : 1}
        onPress={props.onDetailsPress}
        style={postStyles.postHeader}
      >
        <View style={postStyles.postAvatar}>
          {
            props.avatar ? (
              <ImageBackground
                source={{ uri: props.avatar }}
                style={postStyles.postAvatarMedia}
              />
            ) : (
              <Text style={postStyles.avatarInitials}>
                {props.firstName[0]} {props.lastName[0]}
              </Text>
            )
          }
        </View>
        <View style={postStyles.postHeaderTxt}>
          <Text
            numberOfLines={1}
            style={postStyles.postHeaderTitle}
          >
            {props.firstName} {props.lastName}
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
  firstName: "",
  lastName: "",
  avatar: "",
  description: "",
  liked: false,
  likes: 0,
  comments: 0,
  onLike: () => alert("Like!"),
  onComment: () => alert("Comment!"),
};

Post.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
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
