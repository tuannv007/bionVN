import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Button,
  Text,
  TouchableOpacity,
  FlatList,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { subNumber, addNumber,showDialog } from '../actions/CountActions';
class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { number, increment, descrement,cong10 } = this.props;

    return (
      <View style={styles.counterView} >
        <Button onPress={() => descrement()} title="Sub" />
        <Text>Count + {number}</Text>
        <Button onPress={() => increment(5)} title="Add" />
        <Button  onPress = {() => cong10(10)} title="Login" ></Button>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  counterView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => ({
  number: state.numberReducer.number
});

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(addNumber(value)),
  descrement: () => dispatch(subNumber()),
  cong10: (value) => dispatch(showDialog(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


