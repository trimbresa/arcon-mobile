import React, {Component, Fragment} from "react";
import {
  View,
  StatusBar,
  ScrollView,
  ImageBackground
} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

// Components
import LoginForm from "../../components/Forms/LoginForm";

// Styles
import loginStyles from "./assets/styles/loginStyles";

// Images
import bgImage from "./assets/images/gym.jpg";

class Login extends Component {
  static navigationOptions = {
    title: "Login",
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={bgImage}
          style={loginStyles.bgWrapper}
        >
          <View
            style={loginStyles.loginWrapper}
          >
            <ScrollView
              contentContainerStyle={loginStyles.loginInnerWrapper}
            >
              <LoginForm {...this.props}/>
            </ScrollView>
          </View>
        </ImageBackground>
      </Fragment>
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

export default createAppContainer(LoginRouter);
