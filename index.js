/**
 * @format
 */
import React from "react";
import {AppRegistry} from "react-native";
import {name as appName} from "./app.json";
import {Provider} from "react-redux";

import MainRouter from "./app/routers/MainRouter";
import store from "./app/store";

const MainRouterWithStore = () => {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainRouterWithStore);
