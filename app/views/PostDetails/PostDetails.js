import React, { Component } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import Video from "react-native-video";

// Components
import LikeBtn from "../../components/Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../components/Buttons/CommentBtn/CommentBtn";
import Comment from "../../components/Blocks/Comment";

// Styles
import postDetailsStyles from "./assets/styles/postDetailsStyles";

// Data
import data from "../Dashboard/dummyDashboard.json";
import postComments from "./postComments.json";
import ObjectHelper from "../../helpers/ObjectHelper";

export default class PostDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state = {} } = navigation;
    const { postTitle = "Post Details" } = state.params;

    return {
      title: postTitle
    };
  }

  state = {
    post: {},
    comments: []
  }

  componentDidMount() {
    const { state = {} } = this.props.navigation;
    const { postId = -1 } = state.params;
    
    let post = data.find((post) => (post.id === postId));
    let comments = postComments.find((comments) => (comments.id === postId));
    
    if(post) {
      this.props.navigation.setParams({ title: post.title });

      this.setState({
        post,
        comments: postComments ? postComments : []
      });
    };
  }
  
  render() {
    const { post, comments } = this.state;
    const { media = {} } = post;

    const image = media.image && (
      <ImageBackground
        source={{ uri: media.image }}
        style={postDetailsStyles.image}
      />
    );
  
    const video = media.video && (
      <Video
        source={{uri: media.video}}
        controls={true}
        playInBackground={false}
        style={postDetailsStyles.video}
        paused={true}
      />
    );

    const headerComponent = (
      <>
        <View style={postDetailsStyles.postDetailsMedia}>
          {/* <Text style={postDetailsStyles.postBodyTxt}>
            {this.props.description}
          </Text> */}
          {
            ObjectHelper.objNotNull(media) && (
              <>
                {image}
                {video}
              </>
            )
          }
        </View>
        <View style={postDetailsStyles.postDetailsActions}>
          <LikeBtn
            liked={post.liked}
            onPress={() => alert("Liked")}
            likes={post.likes}
          />
          <CommentBtn
            onPress={() => alert("Comment!")}
            comments={post.comments}
          />
        </View>
      </>
    );

    return (
      <View style={postDetailsStyles.postDetailsWrapper}>
        <FlatList
          ListHeaderComponent={headerComponent}
          data={comments}
          contentContainerStyle={postDetailsStyles.commentsWrapper}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <Comment item={item}/>
              <View style={postDetailsStyles.commentsReplies}>
              {
                item.replies && item.replies.map((reply, key) => (
                  <Comment hideComment={true} key={key} item={reply}/>
                ))
              }
              </View>
            </>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
