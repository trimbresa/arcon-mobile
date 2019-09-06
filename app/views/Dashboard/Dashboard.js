import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";

class Dashboard extends Component {
  static navigationOptions = {
    title: "Dashboard",
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={dashboardStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={dashboardStyles.homeWrapper}>
              <Text style={dashboardStyles.text}>Welcome to Arcon!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const HomeRouter = createStackNavigator(
  {
    Dashboard
  }
);

export default createAppContainer(HomeRouter);