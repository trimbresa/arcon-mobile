import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView} from "react-native";

// Styles
import messagesStyles from "./assets/styles/messagesStyles";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={messagesStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={messagesStyles.homeWrapper}>
              <Text style={messagesStyles.text}> Messages page</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
