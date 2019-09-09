import React, { Component, Fragment } from "react";
import {View, Text, SafeAreaView, StatusBar, ScrollView, Button} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Styles
import loginStyles from "./assets/styles/loginStyles";

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={loginStyles.homeSafeArea}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={loginStyles.homeWrapper}>
              <Text style={loginStyles.text}>Welcome to Login!</Text>
              <Button
                title="Go to App"
                onPress={() => this.props.navigation.navigate('App')}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const LoginRouter = createStackNavigator(
  {
    Login
  }
);

export default createAppContainer(LoginRouter);