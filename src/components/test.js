import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
export default class Test extends Component {
    static navigationOptions = {
        title: 'Bion',
        headerStyle: {
            backgroundColor: '#841584',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 20,
        textAlignVertical: 'center',
        fontSize: 16,
        color: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0, 0, 0, 0.12)',
        marginBottom: 10,
    },
});