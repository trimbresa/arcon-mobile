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
  RefreshControl,
} from "react-native";
import Video from "react-native-video";
import {createStackNavigator} from "react-navigation-stack";
import {connect} from "react-redux";
import * as actions from "./actions";
import {ActivityIndicator} from "react-native-paper";

// Components
import LikeBtn from "../../components/Buttons/LikeBtn/LikeBtn";
import CommentBtn from "../../components/Buttons/CommentBtn/CommentBtn";
import Comment from "../../components/Blocks/Comment";

// Styles
import postDetailsStyles from "./assets/styles/postDetailsStyles";
import {placeholderText} from "../../global/styles/globalStyles";
import * as colors from "../../global/styles/colors";

// Data
import ObjectHelper from "../../helpers/ObjectHelper";
import CloseBtn from "../../components/Buttons/CloseBtn";
import MsgInput from "../../components/Blocks/MsgInput";
import Media from "../../components/Blocks/Media";
import DateHelper from "../../helpers/DateHelper";

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
    pageNr: -1,
    post: {},
  };

  fetchComments = (refresh = false) => {
    const {
      post: {id},
      pageNr,
    } = this.state;

    const newPageNr = refresh ? 0 : pageNr + 1;

    this.setState(
      {
        pageNr: newPageNr,
      },
      () => {
        this.props.fetchPostComments(id, newPageNr, refresh);
      },
    );
  };

  componentDidUpdate = (p, c) => {
    if (p.isSubmitting && !c.isSubmitting) this.fetchComments(true);
  };

  componentDidMount() {
    const post = this.props.navigation.getParam("post");
    this.setState({post, comments: []}, () => this.fetchComments(true));
  }

  onSend = ({note, attachment}) => {
    const {id} = this.state.post;
    let comment = {
      note,
      postId: id,
    };

    this.props.postComment({comment, attachment});
    this.postDetailsReplies.scrollToOffset({offset: 0, animated: true});
  };

  render() {
    const {
      post: {
        id,
        note,
        firstName = "Redi",
        lastName = "Bello",
        likes,
        liked,
        comments: commentNr,
        attachment,
        avatar,
        createdOn,
      },
    } = this.state;

    const {
      isSubmitting,
      haveAllCommentsLoaded,
      comments,
      refreshing,
      loading,
      error,
    } = this.props;

    const headerComponent = (
      <React.Fragment>
        <View style={postDetailsStyles.headerWrapper}>
          <View style={postDetailsStyles.detailsWrapper}>
            <View style={postDetailsStyles.avatar}>
              {avatar ? (
                <ImageBackground source={{uri: avatar}} style={{}} />
              ) : (
                <Text style={{}}>
                  {firstName[0]} {lastName[0]}
                </Text>
              )}
            </View>

            <View style={postDetailsStyles.infoWrapper}>
              <Text numberOfLines={1} style={postDetailsStyles.name}>
                {firstName} {lastName}
              </Text>
              <Text numberOfLines={1} style={postDetailsStyles.time}>
                {DateHelper.formatFromNow(createdOn)}
              </Text>
            </View>
          </View>

          <Text style={postDetailsStyles.postNote}>{note}</Text>

          {attachment && attachment.length > 0 && (
            <Media attachment={attachment[0]} />
          )}
        </View>

        <View style={postDetailsStyles.postDetailsActions}>
          <LikeBtn liked={!!liked} postId={id} likes={likes} />
          <CommentBtn comments={commentNr} />
        </View>
      </React.Fragment>
    );

    const emptyComponent = (
      <View style={{padding: 20}}>
        {!loading && !error && !comments.length ? (
          <Text style={placeholderText}>No comments to show.</Text>
        ) : (
          !loading &&
          error && (
            <Text style={placeholderText}>
              Couldn't load your data. Try again later!
            </Text>
          )
        )}
      </View>
    );

    return (
      <SafeAreaView style={postDetailsStyles.postDetailsSafeArea}>
        <KeyboardAvoidingView
          style={postDetailsStyles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "height" : false}
          keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 90}>
          {headerComponent}

          <FlatList
            ref={ref => {
              this.postDetailsReplies = ref;
            }}
            ListEmptyComponent={emptyComponent}
            data={comments}
            onEndReached={() => this.fetchComments()}
            onEndReachedThreshold={0.01}
            contentContainerStyle={postDetailsStyles.commentsWrapper}
            refreshControl={
              <RefreshControl
                progressViewOffset={30}
                onRefresh={() => {
                  this.fetchComments(true);
                }}
                refreshing={refreshing}
                colors={[colors.primaryColor, colors.red]}
              />
            }
            renderItem={({item}) => <Comment comment={item} />}
            ListFooterComponent={
              !haveAllCommentsLoaded ? (
                <View
                  style={{
                    width: "100%",
                    paddingBottom: 20,
                    alignItems: "center",
                  }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View />
              )
            }
            keyExtractor={({id}) => `${id}`}
          />

          <MsgInput onSend={this.onSend} isSubmitting={isSubmitting} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

// Connect with redux
const PostDetailsContainer = connect(
  ({postDetailsReducer}) => postDetailsReducer,
  actions,
)(PostDetails);

export default createStackNavigator({
  PostDetailsContainer,
});
