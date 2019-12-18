import React, {Component, Fragment} from "react";
import {View, StatusBar, ScrollView, ImageBackground} from "react-native";
import {createStackNavigator} from "react-navigation-stack";

// Components
import LoginForm from "../../components/Forms/LoginForm";

// Styles
import loginStyles from "./assets/styles/loginStyles";

// Images
import bgImage from "./assets/images/gym.jpg";

import AuthService from "../../services/AuthService";
import StorageManager from "../../helpers/StorageManager";
import FlashMessageHelper from "../../helpers/FlashMessageHelper";

class Login extends Component {
  static navigationOptions = {
    title: "Login",
  };

  authenticate = async values => {
    try {
      const res = await AuthService.login(values.employeeCode, values.password);
      if (res.data) {
        const {token, user} = res.data;
        await StorageManager.set("token", token);
        await StorageManager.set("user", user);
        this.props.navigation.navigate("AuthLoading");
        return true;
      } else {
        FlashMessageHelper.dangerMessage(
          "Couldn't log you in. Please try again later!",
        );
        return false;
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data) {
        FlashMessageHelper.dangerMessage(err.response.data);
      } else {
        FlashMessageHelper.dangerMessage("Network error!");
      }
      return false;
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={loginStyles.bgWrapper}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={loginStyles.loginInnerWrapper}>
          <LoginForm authenticate={this.authenticate} {...this.props} />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const LoginRouter = createStackNavigator(
  {
    Login,
  },
  {
    headerMode: "none",
  },
);

export default LoginRouter;
