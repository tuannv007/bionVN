import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';


class MoveCoin extends Component {
    componentDidMount() {
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View>
                <CheckBox
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    username: state.testReducer.username
});
export default connect(mapStateToProps)(MoveCoin)