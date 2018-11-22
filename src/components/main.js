import React, { Component } from 'react'
import { View,Text } from 'react-native'
import SendPoint from './sendPoint.js'
import Test from './test'
import { createBottomTabNavigator } from 'react-navigation';
import Counter from './counter';

export default createBottomTabNavigator({
    SendPoint: {
        screen: SendPoint,navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerTitle: <Text>Home</Text>,
            headerLeft : null,
            headerRight: null,
          })
    },
    Test: { screen: Test },
    Counter :{screen : Counter}
}, {
        tabBarOptions: {
            activeTintColor: 'green',
            activeBackgroundColor: '#841584',
        }
    });