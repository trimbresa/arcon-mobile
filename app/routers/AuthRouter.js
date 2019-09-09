import { createStackNavigator } from "react-navigation-stack";

// Auth screens
import Login from "../views/Login";

export default createStackNavigator(
  {
    Login,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: "Login"
  }
);