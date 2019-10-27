import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { YellowBox } from 'react-native';

// Routers
import AuthRouter from "./AuthRouter";
import AppRouter from "./AppRouter";
import AuthLoading from "./../views/AuthLoading";

import StorageManager from "../helpers/StorageManager";

// Temp solution, surely will be replaced later
//TODO:CHECK NOT USING THIS LIFECYCLE METHODS. Ignoring change of lifecycle react-native
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const MainRouter = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthRouter,
    App: AppRouter,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(MainRouter);