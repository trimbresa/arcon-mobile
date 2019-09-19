import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

// App screens
import Dashboard from "../views/Dashboard";
import Messages from "../views/Messages";
import Profile from "../views/Profile";
import Notifications from "../views/Notifications";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createStackNavigator } from "react-navigation-stack";

// Styles
import { primaryColor } from "../global/styles/colors";

const appTabsNavigatorViews = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="view-dashboard-outline" size={25} color={tintColor} />
        )
      }
    },
    // Schedule: {
    //   screen: Messages,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <MaterialCommunityIcons name="calendar-range-outline" size={25} color={tintColor} />
    //     )
    //   }
    // },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="comment-text-multiple-outline" size={23} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            name="user"
            size={22}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    lazy: true,
    tabBarOptions: {
      activeTintColor: primaryColor
    }
  }
);

const appStackNavigatorViews = createStackNavigator(
  {
    App: appTabsNavigatorViews,
    Notifications,
  },
  {
    initialRouteName: "App",
    defaultNavigationOptions: {
      header: null
    }
  }
);


export default appStackNavigatorViews;