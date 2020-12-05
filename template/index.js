/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppProviders from './src/context';

const Main = () => {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
};

AppRegistry.registerComponent(appName, () => Main);
