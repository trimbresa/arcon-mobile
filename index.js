/**
 * @format
 */
import React from "react";
import {AppRegistry, View} from "react-native";
import {name as appName} from "./app.json";
import {Provider} from "react-redux";

import MainRouter from "./app/routers/MainRouter";
import store from "./app/store";
// import {firebase} from "@react-native-firebase/messaging";

import FlashMessage from "react-native-flash-message";

const MainRouterWithStore = () => {
  // messaging
  // console.dir(firebase.messaging);
  return (
    <Provider store={store}>
      <View />
      <MainRouter />
      <FlashMessage position="top" />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainRouterWithStore);
