import React, {Component, Fragment} from "react";
import {View, Text, SafeAreaView, StatusBar, FlatList, ActivityIndicator} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

// Views
import MsgDetails from "../MsgDetails";

// Components
import NotificationsBtn from "../../components/RouterElements/NotificationsBtn";
import MsgItem from "../../components/Lists/MsgItem";
import NoMsgItem from "../../components/Lists/NoMsgItem";

// Styles
import messagesStyles from "./assets/styles/messagesStyles";

import data from "./messages.json";

class Messages extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: "Messages",
      headerRight: <NotificationsBtn navigation={navigation} />,
    };
  }

  state = {
    messages: [],
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: data,
        isLoading: false
      });
    }, 700);
  }

  refresh = () => {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        ...data
      ],
      isLoading: false
    }));
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={messagesStyles.messagesSafeArea}>
          <FlatList
            data={this.state.messages}
            refreshing={this.state.isLoading}
            onRefresh={this.refresh}
            renderItem={({ item }, key) => (
              <MsgItem
                key={key}
                title={item.title}
                timeStamp={item.timeStamp}
                lastMsg={item.lastMsg}
                badge={item.badge}
                avatar={item.avatar}
                unread={item.unread}
                onPress={() => this.props.navigation.navigate("MsgDetails")}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => !this.state.isLoading && (<NoMsgItem/>)}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const MessagesRouter = createStackNavigator(
  {
    Messages,
    MsgDetails
  },
  {
    initialRouteName: "Messages",
    mode: "modal",
    navigationOptions: {
      tabBarVisible: false,
    }
  },
);

export default createAppContainer(MessagesRouter);