/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Routers
import MainRouter from "./app/routers/MainRouter";

AppRegistry.registerComponent(appName, () => MainRouter);
