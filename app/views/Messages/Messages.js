import React, {Component, Fragment} from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {connect} from "react-redux";
import * as actions from "./actions";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";
import MsgItem from "../../components/Lists/MsgItem";
import NoMsgItem from "../../components/Lists/NoMsgItem";

// Styles
import messagesStyles from "./assets/styles/messagesStyles";
import * as colors from "../../global/styles/colors";
import {primaryFontBold} from "../../global/styles/fonts";

import data from "./messages.json";
import StorageManager from "../../helpers/StorageManager";

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
  };

  async componentDidMount() {
    console.log(await StorageManager.get("token"));
    this.props.fetchMessages();
    setTimeout(() => {
      this.setState({
        messages: data,
        isLoading: false,
      });
    }, 700);
  }

  refresh = () => {
    this.setState(prevState => ({
      messages: [...prevState.messages, ...data],
      isLoading: false,
    }));
  };

  render() {
    const {messages = [], loading} = this.props.messagesReducer;

    return (
      <Fragment>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <SafeAreaView style={messagesStyles.messagesSafeArea}>
          <FlatList
            data={messages}
            refreshing={loading}
            onRefresh={this.props.fetchMessages}
            renderItem={({item}) => (
              <MsgItem
                title={`${item.receiverFirstName} ${item.receiverLastName}`}
                timestamp={`${item.createdAt}`}
                lastMsg={`You: ${item.body}`}
                badge={item.badge}
                avatar={item.avatar}
                unread={item.isRead === 0 && true}
                onPress={() =>
                  this.props.navigation.navigate("MsgDetails", {
                    id: item.id,
                    title: `${item.receiverFirstName} ${item.receiverLastName}`,
                  })
                }
              />
            )}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() =>
              !loading && !messages.length && <NoMsgItem />
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
  },
  {
    initialRouteName: "Messages",
    // mode: "modal",
    // navigationOptions: {
    //   tabBarVisible: false,
    // },
  },
);

export default MessagesRouter;
