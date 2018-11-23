import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar, TouchableWithoutFeedback } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import { CheckBox } from 'react-native-elements'


const data = [
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
  { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
  {
    name: 'Muhyiddeen',
    status: 'Blocked',
    time: '10:10 PM',
    date: '9 Feb 2018',
  },
];

export default class Test extends Component {
  actionOnRow(item) {
    console.log(item)
  }
  cell = (data, index) => {
    const item = data.cleanData ? data.cleanData : data
    return <View>
      <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}><Text>{item.name}
      </Text></TouchableWithoutFeedback></View>;

  }

  render() {
    const { navigation } = this.props;
    return (
        <CompleteFlatList
          searchKey={['name', 'status', 'time', 'date']}
          highlightColor="yellow"
          pullToRefreshCallback={() => {
          }}
          data={data}
          renderSeparator={null}
          renderItem={this.cell}
        />

    )
  }
}