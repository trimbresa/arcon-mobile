import { createAppContainer } from "react-navigation";
import { YellowBox } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Main screens
import Dashboard from "../views/Dashboard";
import Messages from "../views/Messages";
import Profile from "../views/Profile";

// Temp solution, surely will be replaced later
//TODO:CHECK NOT USING THIS LIFECYCLE METHODS. Ignoring change of lifecycle react-native
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const MainRouter = createBottomTabNavigator(
  {
    Dashboard,
    Messages,
    Profile
  },
  {
    initialRouteName: "Dashboard",
    lazy: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(MainRouter);