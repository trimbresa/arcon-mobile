import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Styles
import NotificationsStyles from "./assets/styles/notificationsStyles";

class Notifications extends Component {
  static navigationOptions = {
    title: "Notifications",
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={NotificationsStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={NotificationsStyles.homeWrapper}>
              <Text style={NotificationsStyles.text}>Welcome to Notifications!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const NotificationsRouter = createStackNavigator(
  {
    Notifications
  }
);

export default createAppContainer(NotificationsRouter);