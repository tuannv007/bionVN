import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
export default class SendPoint extends Component {
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
        tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../resource/image/baseline_send_black_18dp.png')}
            />
          ),
        
    };
    render() {
        return (
            <View>
                <FlatList
                    data={[
                        { key: 'Nguyen Tuan ghi nhan Thinh Nguyen dfffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', uri1: 'https://facebook.github.io/react-native/docs/assets/favicon.png' },
                        { key: 'Thinh Nguyen', uri1: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <View style={styles.row}>
                            <View style = {{flex:1}}>
                                <Text >{item.key}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Image
                                        style={{ width: 30, height: 30, borderRadius: 40 }}
                                        source={{ uri: item.uri1 }}
                                    />

                                    <Image style={{ width: 30, height: 30, borderRadius: 40, marginLeft: 20 }}
                                        source={require('../resource/image/baseline_send_black_18dp.png')}
                                    />

                                    <Image
                                        style={{ width: 30, height: 30, borderRadius: 40, marginLeft: 20 }}
                                        source={{ uri: item.uri1 }}
                                    />
                                </View>
                                <Text style={{ marginTop: 20,marginBottom:15 }}>{item.key}</Text>
                                <Text style = {{marginBottom:20}}>Hôm qua </Text>
                            </View>
                            <View style={{
                                flex:0.3,marginBottom:10,
                            }}>
                                <Text style={{  marginRight:5,color: 'green', textAlign:'right',fontSize: 20,marginTop:15 }}> +10 </Text>
                            </View>
                        </View>

                    }
                    keyExtractor={item => item.key}
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