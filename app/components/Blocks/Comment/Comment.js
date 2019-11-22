import React from "react";
import {View, Text} from "react-native";

// Components
import LikeBtn from "../../Buttons/LikeBtn";
import CommentBtn from "../../Buttons/CommentBtn";

// Styles
import commentStyles from "./assets/styles/commentStyles";
import Media from "../Media";

export default function Comment({
  comment: {firstName, lastName, note, likes, liked, id, attachment},
}) {
  return (
    <View style={commentStyles.comment}>
      <View style={commentStyles.commentAvatar} />
      <View style={commentStyles.commentText}>
        <Text style={commentStyles.commentTitle}>
          {firstName} {lastName}
        </Text>
        <View>
          <Text style={commentStyles.commentDescription}>{note}</Text>
          {attachment && attachment.length > 0 && (
            <Media attachment={attachment[0]} />
          )}
        </View>
        <View style={commentStyles.commentActions}>
          <LikeBtn liked={!!liked} postId={id} likes={likes} />
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
