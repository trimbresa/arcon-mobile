import React, {Component} from "react";
import {
  View,
  Platform,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  RefreshControl,
} from "react-native";
import {connect} from "react-redux";
import * as actions from "./actions";
import StorageManager from "../../helpers/StorageManager";

// Components
import MsgText from "../../components/Blocks/MsgText";
import MsgInput from "../../components/Blocks/MsgInput";

// Styles
import chatStyles from "./assets/styles/chatStyles";
import * as colors from "../../global/styles/colors";

import * as fonts from "../../global/styles/fonts";
import {ActivityIndicator} from "react-native-paper";
import MessagesService from "../../services/MessagesService";
import FlashMessageHelper from "../../helpers/FlashMessageHelper";

class MsgDetails extends Component {
  static navigationOptions = ({navigation: {getParam}}) => {
    const chat = getParam("chat");

    return {
      headerTitle: `${chat.receiverFirstName} ${chat.receiverLastName}`,
      headerTitleStyle: {
        fontFamily: fonts.primaryFontBold,
      },
    };
  };

  state = {userId: null, chat: {}, page: 0};

  componentDidMount = async () => {
    const chat = this.props.navigation.getParam("chat");
    this.setState({chat}, () => this.fetchThreads(true));

    const {id: userId} = await StorageManager.get("user");
    this.setState({userId});
  };

  fetchThreads = (refreshing = false) => {
    const {replyOf: id} = this.state.chat;

    this.setState(
      ({page}) => ({
        page: refreshing ? 1 : page + 1,
      }),
      () => {
        const {page} = this.state;
        this.props.fetchMessageDetails({id, page, refreshing});
      },
    );
  };

  onSend = async ({note, attachment}) => {
    console.log(attachment);
    const {replyOf: threadId} = this.state.chat;
    MessagesService.newMessage({threadId, note, attachment})
      .then(r => {
        console.log(r);
        try {
          if (JSON.parse(r).message == "Message created successfully")
            this.fetchChat();
        } catch (e) {
          FlashMessageHelper.dangerMessage("Couldn't send message");
        }
      })
      .catch(e => console.log(e));
  };

  render() {
    const {
      threads = [],
      attachments,
      loading,
      error,
      refreshing,
      haveAllThreadsLoaded,
    } = this.props.chatReducer;
    const {userId} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "height" : false}
          keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 90}
          enabled>
          <FlatList
            contentContainerStyle={chatStyles.chat}
            keyboardDismissMode="on-drag"
            data={threads}
            extraData={threads}
            keyExtractor={i => i.createdAt}
            keyboardShouldPersistTaps="never"
            showsVerticalScrollIndicator={false}
            inverted
            onEndReachedThreshold={0.01}
            renderItem={({item, index}) => {
              return (
                <MsgText
                  attachment={
                    attachments &&
                    attachments[item.id] &&
                    attachments[item.id][0]
                  }
                  userId={userId}
                  message={item}
                  prevMessage={threads[index - 1]}
                  nextMessage={threads[index + 1]}
                />
              );
            }}
            ListFooterComponent={
              !haveAllThreadsLoaded && !error && !refreshing ? (
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
            onEndReached={e => {
              !haveAllThreadsLoaded && this.fetchThreads();
            }}
            // refreshControl={
            //   <RefreshControl
            //     onRefresh={() => {
            //       this.fetchThreads(true);
            //     }}
            //     refreshing={refreshing}
            //     color={colors.primaryColor}
            //     colors={[colors.primaryColor]}
            //   />
            // }
          />

          <MsgInput onSend={this.onSend} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

// Connect with redux
const ChatContainer = connect(chatReducer => chatReducer, actions)(MsgDetails);

export default ChatContainer;
// export default createStackNavigator({
// Chat: ChatContainer,
// });
