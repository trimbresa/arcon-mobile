import React, {Component} from "react";
import {View, ActivityIndicator, StatusBar} from "react-native";
import StorageManager from "../../helpers/StorageManager";

import authLoadingStyles from "./assets/styles/authLoadingStyles";
import {primaryColor} from "../../global/styles/colors";

export default class AuthLoading extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await StorageManager.get("token");

    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <View style={authLoadingStyles.authLoadingWrapper}>
        <ActivityIndicator color={primaryColor} size="large" />
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
