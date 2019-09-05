import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView} from "react-native";

// Styles
import dashboardStyles from "./assets/styles/dashboardStyles";

export default class Dashboard extends Component {
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
