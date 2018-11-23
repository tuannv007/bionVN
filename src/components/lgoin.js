import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from '../actions/LoginAction';
import axios from 'axios';

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
    

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            tokenVN: '',
            isLoading: false,
        };
    }

    componentDidMount(){
        console.log("componentDidMount",this.props);
    }
    login(e) {
        //this.props.loginA(this.state.username, this.state.password);
        //alert(this.state.username);
        //e.preventDefault();
        this.setState({ isLoading: true })
        axios
            .post('https://reqres.in/api/login',
                {
                    'email': this.state.username,
                    'password': this.state.password
                }
            )
            .then((response) => {
                this.props.loginA(this.state.username, this.state.password),
                this.setState({ tokenVN: response.data.token, isLoading: false }),
                this.props.navigation.navigate('Main'),
                console.log("tuanbg",this.state.username);
            })
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <View style={styles.viewContainer
            }>
            <Text>{this.props.username}  + aaaaaaaas</Text>
            
                <View style={styles.viewGroupName}>
                    <Text>Tên tổ chức</Text>
                    <TextInput
                        placeholder={this.state.tokenVN}
                        style={styles.groupName}
                    />
                </View >
                <View style={styles.viewGroupName}>
                    <Text>Email</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({ username: text })}
                        style={styles.groupName}
                    />
                </View>
                <View style={styles.viewGroupName}>
                    <Text>Mật khẩu</Text>
                    <TextInput
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry={true}
                        textContentType='password'
                        style={styles.groupName}
                    />
                </View>
                <View style={styles.viewButton}>
                    <Button
                        title="Đăng Nhập"
                        color="#841584"
                        onPress={(e) => this.login(e)}
                    />
                </View>
                {this.state.isLoading && (
                    <ActivityIndicator
                        style={{ height: 80 }}
                        color="#C00"
                        size="large"
                    />
                )}
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
