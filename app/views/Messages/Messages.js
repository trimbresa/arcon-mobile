import React, {Component, Fragment} from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  RefreshControl,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {connect} from "react-redux";
import * as actions from "./actions";
import ChatContainer from "../Chat";
import StorageManager from "../../helpers/StorageManager";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";
import MsgItem from "../../components/Lists/MsgItem";
import NoMsgItem from "../../components/Lists/NoMsgItem";

// Styles
import messagesStyles from "./assets/styles/messagesStyles";
import * as colors from "../../global/styles/colors";
import {primaryFontBold} from "../../global/styles/fonts";
import {ActivityIndicator} from "react-native-paper";

class Messages extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitleStyle: {
        fontFamily: primaryFontBold,
      },
      title: "Messages",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  };

  state = {
    messages: [],
    isLoading: true,
    userId: null,
    page: 0,
  };

  fetchMessages = (refreshing = false) => {
    this.setState(
      ({page}) => ({
        page: refreshing ? 1 : page + 1,
      }),
      () => {
        const {page} = this.state;
        this.props.fetchMessages({page, refreshing});
      },
    );
  };

  async componentDidMount() {
    this.fetchMessages();
    const {id: userId} = await StorageManager.get("user");
    this.setState({userId});
  }

  render() {
    const {
      messages = [],
      loading,
      error,
      haveAllMessagesLoaded,
      refreshing,
    } = this.props.messagesReducer;

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={messagesStyles.messagesSafeArea}>
          <FlatList
            data={messages}
            extraData={messages}
            renderItem={({item}) => (
              <MsgItem
                userId={this.state.userId}
                message={item}
                onPress={() =>
                  this.props.navigation.navigate("Chat", {
                    chat: item,
                  })
                }
              />
            )}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={() =>
              !loading && !messages.length && <NoMsgItem />
            }
            ListFooterComponent={
              !haveAllMessagesLoaded && !error && !refreshing ? (
                <View
                  style={{
                    width: "100%",
                    paddingVertical: 20,
                    alignItems: "center",
                  }}>
                  <ActivityIndicator />
                </View>
              ) : (
                <View />
              )
            }
            onEndReachedThreshold={0.01}
            onEndReached={e => {
              !haveAllMessagesLoaded && this.fetchMessages();
            }}
            refreshControl={
              <RefreshControl
                onRefresh={() => {
                  this.fetchMessages(true);
                }}
                refreshing={refreshing}
                color={colors.primaryColor}
                colors={[colors.primaryColor]}
              />
            }
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

// Connect with redux
const MessagesContainer = connect(
  messagesReducer => messagesReducer,
  actions,
)(Messages);

const MessagesRouter = createStackNavigator(
  {
    Messages: MessagesContainer,
    Chat: ChatContainer,
  },
  {
    initialRouteName: "Messages",
  },
);

export default MessagesRouter;
