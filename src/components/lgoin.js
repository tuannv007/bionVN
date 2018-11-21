import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends Component {
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
    login (){
        this.props.navigation.navigate('Main');
    }
    render() {
        return (
            <View style={styles.viewContainer
            }>
                <View style={styles.viewGroupName}>
                    <Text>Tên tổ chức</Text>
                    <TextInput
                        style={styles.groupName}
                    />
                </View >
                <View style={styles.viewGroupName}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.groupName}
                    />
                </View>
                <View style={styles.viewGroupName}>
                    <Text>Mật khẩu</Text>
                    <TextInput
                        secureTextEntry={true}
                        textContentType='password'
                        style={styles.groupName}
                    />
                </View>
                <View style={styles.viewButton}>
                    <Button 
                        title="Đăng Nhập"
                        color="#841584"
                        onPress = {() => this.login()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groupName: {
        fontSize: 16,
        paddingLeft: 10,
        marginTop: 10,
        borderRadius: 3,
        height: 40, borderColor: '#841584', borderWidth: 1,
    },
    viewGroupName: {
        marginTop: 15,
        marginLeft: 15, marginRight: 15
    },
    viewContainer: {
        width: '100%',
        backgroundColor: '#ffffff'
    },
    viewButton: {
        borderRadius: 5, marginTop: 30, height: 50,
        marginLeft: 15, marginRight: 15, alignContent: 'center',
    }
});