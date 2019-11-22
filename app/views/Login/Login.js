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

class Login extends Component {
  static navigationOptions = {
    title: "Login",
  };

  authenticate = values => {
    return AuthService.login(values.employeeCode, values.password)
      .then(async res => {
        if (res.data) {
          const {token, user} = res.data;
          await StorageManager.set("token", token);
          await StorageManager.set("user", user);

          return true;
        } else {
          alert("Couldn't log you in. Please try again later!");
        }
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.data) {
          alert(err.response.data);
        } else {
          alert("Network error!");
        }
      });
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
