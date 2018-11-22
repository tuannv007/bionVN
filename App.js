/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/components/lgoin';
import SendPoint from './src/components/sendPoint';
import Main from './src/components/main';
import store from './src/stores/store';
import { connect,Provider } from 'react-redux';
import Counter from './src/components/counter';


const RootStack = createStackNavigator(
  {
    Home: LoginScreen,
    Main: Main
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
      </Provider>)
  }
}

