import React from "react";
import { View, Text } from "react-native";

// Components
import LikeBtn from "../../Buttons/LikeBtn";
import CommentBtn from "../../Buttons/CommentBtn";

// Styles
import commentStyles from "./assets/styles/commentStyles";

export default function Comment(props) {
  // const { item } = props;

  return (
    <View style={commentStyles.comment}>
      <View style={commentStyles.commentAvatar}></View>
      <View style={commentStyles.commentText}>
        <Text style={commentStyles.commentTitle}>
          {props.firstName} {props.lastName}
        </Text>
        <Text style={commentStyles.commentDescription}>
          {props.note}
        </Text>
        <View style={commentStyles.commentActions}>
          <LikeBtn
            // liked={item.comment.liked}
            onPress={() => alert("Liked")}
            // likes={item.comment.likes}
          />
          {/* {
            !props.hideComment && (
              <CommentBtn
                onPress={() => alert("Comment!")}
                comments={item.comment.comments}
              />
            )
          } */}
        </View>
      </View>
    </View>
  );
}
