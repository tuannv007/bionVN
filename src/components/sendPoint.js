import React, { Component } from 'react'
import {
    Platform, StyleSheet, Text, View, TextInput,
    Button, FlatList, Image, TouchableWithoutFeedback, Modal
} from 'react-native';
import { connect } from 'react-redux';
import { AddNewItem } from '../actions/SendPointAction';
import axios from 'axios';
import { SearchBar } from 'react-native-elements'


class SendPoint extends Component {
    static navigationOptions = {
        header: {
            visible: false
        },
        headerStyle: {
            backgroundColor: '#841584',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        title: 'Bion',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../resource/image/baseline_send_black_18dp.png')}
            />
        ),

    };
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
        }
    };

    getListUserFromSever() {
        axios.get('https://reqres.in/api/users?page=2')
            .then((response) => {
                this.setState({ listData: response.data.data })
                console.log("list", response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getListUserFromSever();
    }

    actionOnRow(item) {
        // DELE ITEM : 
        // var messageList = [...this.state.listData];
        //let index = messageList.indexOf(item);
        // messageList.splice(index, 1);
        //this.setState({ listData: messageList });
        //console.log("sellect item : ", { messageList });

        //ADD ITEM
        //console.log("send",this.state.listData);

        //var messageList = [...this.state.listData];
        //messageList.unshift({ key: 'Nguyen TuanBg', uri1: 'https://facebook.github.io/react-native/docs/assets/favicon.png' });
        //this.setState({ listData: messageList });
        //this.props.listDataNew(messageList);

        // this.refs.addModal.showAddModal();
        // this.refs.addModal.showAddModal();

    };

    searchFilterFunction = text => {
        const newData = this.state.listData.filter(item => {
            const itemData = `${item.first_name.toUpperCase()}`;
             const textData = text.toUpperCase();
             console.log("datatext",itemData.indexOf(textData));
             return itemData.indexOf(textData) > -1;    
          })    
        this.setState({ listData: newData });
    };

    render() {
        return (
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round
                    onClear
                    onChangeText={(text) => this.searchFilterFunction(text)}
                    autoCorrect={false}
                />
                <FlatList
                    data={this.state.listData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>
                            <View style={styles.row}>
                                <View style={{ flex: 1 }}>
                                    <Text >{item.first_name} {item.last_name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <Image
                                            style={{ width: 30, height: 30, borderRadius: 40 }}
                                            source={{ uri: item.avatar }}
                                        />

                                        <Image style={{ width: 30, height: 30, borderRadius: 40, marginLeft: 20 }}
                                            source={require('../resource/image/baseline_send_black_18dp.png')}
                                        />

                                        <Image
                                            style={{ width: 30, height: 30, borderRadius: 40, marginLeft: 20 }}
                                            source={{ uri: item.avatar }}
                                        />
                                    </View>
                                    <Text style={{ marginTop: 20, marginBottom: 15 }}>id ${item.id}</Text>
                                    <Text style={{ marginBottom: 20 }}>Hôm qua </Text>
                                </View>
                                <View style={{
                                    flex: 0.3, marginBottom: 10,
                                }}>
                                    <Text style={{ marginRight: 5, color: 'green', textAlign: 'right', fontSize: 20, marginTop: 15 }}> +10 </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    }
                    keyExtractor={item => item.id}
                />

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

function mapStateToProps(state) {
    console.log(state);
    return { myUserName: state }
}

const mapDispatchToProps = (dispatch) => ({
    listDataNew: (listData) => dispatch(AddNewItem(listData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendPoint);