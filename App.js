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
import Login from './src/container/LoginContainer';
import SendPoint from './src/components/sendPoint';
import Main from './src/components/main';
import store from './src/stores/store';
import { connect,Provider } from 'react-redux';
import Counter from './src/components/counter';
import MoveCoin from './src/components/MoveCoin';


const RootStack = createStackNavigator(
  {
    Home: Login,
    Main: Main,
    MoveCoin : MoveCoin,
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

