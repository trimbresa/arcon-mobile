import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Styles
import ProfileStyles from "./assets/styles/profileStyles";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={ProfileStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={ProfileStyles.homeWrapper}>
              <Text style={ProfileStyles.text}>Welcome to Profile!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const ProfileRouter = createStackNavigator(
  {
    Profile
  }
);

export default createAppContainer(ProfileRouter);