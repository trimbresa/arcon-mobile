import {createStackNavigator} from "react-navigation-stack";

// Auth screens
import Login from "../views/Login";
import ResetPassword from "../views/ResetPassword";

export default createStackNavigator(
  {
    Login,
    ResetPassword,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: "Login",
  },
);
