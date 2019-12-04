/**
 * @format
 */
import React from "react";
import {AppRegistry, View} from "react-native";
import {name as appName} from "./app.json";
import {Provider} from "react-redux";

import MainRouter from "./app/routers/MainRouter";
import store from "./app/store";

import FlashMessage from "react-native-flash-message";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

const MainRouterWithStore = () => {
  return (
    <Provider store={store}>
      <View />
      <MainRouter />
      <FlashMessage position="top" />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainRouterWithStore);
