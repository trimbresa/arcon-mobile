import React, {Component} from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import Video from "react-native-video";
import {createStackNavigator} from "react-navigation-stack";
import {connect} from "react-redux";
import * as actions from "./actions";

// Components
import LikeBtn from "../../components/Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../components/Buttons/CommentBtn/CommentBtn";
import Comment from "../../components/Blocks/Comment";

// Styles
import postDetailsStyles from "./assets/styles/postDetailsStyles";

// Data
import ObjectHelper from "../../helpers/ObjectHelper";
import CloseBtn from "../../components/Buttons/CloseBtn";
import MsgInput from "../../components/Blocks/MsgInput";

class PostDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    const {title = "Post Details"} = params;

    return {
      headerLeft: () => <CloseBtn navigation={navigation} />,
      title,
    };
  };

  state = {
    text: "",
  };

  onChangeText = text => {
    this.setState({
      text,
    });
  };

  onSend = async () => {
    const {text} = this.state;
    const {id = 1} = this.props.navigation.state.params;
    let newReply = {
      note: text,
      postId: id,
    };

    await this.props.fetchPostReply(newReply);
    this.setState({text: ""}, () => Keyboard.dismiss());
    this.postDetailsReplies.scrollToOffset({offset: 0, animated: true});
  };

  render() {
    const {params = {}} = this.props.navigation.state;
    const {key = 0} = params;
    const {posts = []} = this.props.dashboardReducer;
    const {isSubmitting} = this.props.postDetailsReducer;

    const {reply = []} = posts.length ? posts[key] : {};

    // const image = media.image && (
    //   <ImageBackground
    //     source={{uri: media.image}}
    //     style={postDetailsStyles.image}
    //   />
    // );

    // const video = media.video && (
    //   <Video
    //     source={{uri: media.video}}
    //     controls={true}
    //     playInBackground={false}
    //     style={postDetailsStyles.video}
    //     paused={true}
    //   />
    // );

    const headerComponent = (
      <>
        <View style={postDetailsStyles.postDetailsMediaWrapper}>
          <ScrollView
            contentContainerStyle={postDetailsStyles.postDetailsMedia}>
            <Text style={postDetailsStyles.postBodyTxt}>{posts[key].note}</Text>
            {/* {ObjectHelper.objNotNull(media) && (
            <>
              {image}
              {video}
            </>
          )} */}
          </ScrollView>
        </View>
        <View style={postDetailsStyles.postDetailsActions}>
          <LikeBtn
            // liked={post.liked}
            // onPress={() => alert("Liked")}
            likes={0}
          />
          <CommentBtn onPress={() => false} comments={reply.length} />
        </View>
      </>
    );

    return (
      <SafeAreaView style={postDetailsStyles.postDetailsSafeArea}>
        <KeyboardAvoidingView
          style={postDetailsStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "height" : false}
          keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 90}
          enabled>
          {headerComponent}
          <FlatList
            ref={ref => {
              this.postDetailsReplies = ref;
            }}
            data={reply}
            contentContainerStyle={postDetailsStyles.commentsWrapper}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <>
                <Comment
                  firstName={item.firstName}
                  lastName={item.lastName}
                  note={item.note}
                />
                {/* <View style={postDetailsStyles.commentsReplies}>
                {item.replies &&
                  item.replies.map((reply, key) => (
                    <Comment hideComment={true} key={key} item={reply} />
                  ))}
              </View> */}
              </>
            )}
            keyExtractor={(item, index) => `${index}`}
          />

          <MsgInput
            placeholder="Write a comment..."
            value={this.state.text}
            onChangeText={this.onChangeText}
            onSend={this.onSend}
            isLoading={isSubmitting}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

// Connect with redux
const DashboardContainer = connect(
  dashboardReducer => dashboardReducer,
  actions,
)(PostDetails);

export default createStackNavigator(
  {
    DashboardContainer,
  },
  {
    mode: "modal",
  },
);
