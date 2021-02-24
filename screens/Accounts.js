import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const Accounts = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Accounts</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Offer")}>Back</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.body1}>
                    <View style={styles.body2}>
                        <TouchableOpacity onPress={() => navigation.navigate("Accounts")}>
                            <Text style={styles.button1}>Statements</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Accounts2")}>
                            <Text style={styles.button2}>Settlements</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                        <TextInput
                            placeholder="Select Restaurant"
                            style={styles.placeholder}
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </TouchableOpacity>
                </View>
                <View style={styles.datas}>
                <View style={styles.data}>
                    <Text style={styles.text3}>UserId</Text>
                    <Text style={{ paddingLeft: 87, padding: 3, fontSize: 13, color: '#696969' }}>: 0.0</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Customer Name</Text>
                    <Text style={{ paddingLeft: 28, padding: 3, fontSize: 13, color: '#696969' }}>: ABC</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Order Delivery</Text>
                    <Text style={{ paddingLeft: 42, padding: 3, fontSize: 13, color: '#696969' }}>: 21/02/2021</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Tax</Text>
                    <Text style={{ paddingLeft: 101, padding: 3, fontSize: 13, color: '#696969' }}>: 5%</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Delivery charge</Text>
                    <Text style={{ paddingLeft: 33, padding: 3, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Tax</Text>
                    <Text style={{ paddingLeft: 101, padding: 3, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Commission</Text>
                    <Text style={{ paddingLeft: 47, padding: 5, fontSize: 13, color: '#696969' }}>: 20%</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Order Amount</Text>
                    <Text style={{ paddingLeft: 39, padding: 3, fontSize: 13, color: '#696969' }}>: 200</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text3}>Transaction Status</Text>
                    <Text style={{ paddingLeft: 10, padding: 3, fontSize: 13, color: '#696969' }}>: Received</Text>
                </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '200%',
        alignItems: 'center'
    },
    head: {
        flexDirection: 'row',
        backgroundColor: '#f5fffa',
        marginTop: 80,
        paddingBottom: 40
    },
    menu: {
        fontSize: 20,
        color: '#FDC913',
        marginTop: 2,
        marginRight: 23
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 23
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 520,
        width: 330,
        elevation: 8,
        borderRadius: 8
    },
    body1: {
        backgroundColor: 'white',
        height: 100,
        width: 330,
        elevation: 5,
        borderRadius: 10
    },
    text3: {
        padding: 3,
        color: '#696969',
        paddingLeft: 50,
        fontSize: 13,
    },
    data: {
        flexDirection: 'row',
        padding: 5
    },
    button1: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 10,
        fontSize: 14,
        color: '#696969',
        borderRadius: 2
    },
    button2: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        fontSize: 14,
        color: '#696969',
        borderRadius: 2
    },
    body2: {
        flexDirection: 'row'
    },
    touch: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    placeholder: {
        width: 330,
        height: 40,
        borderColor: 'white',
        borderWidth: 0,
        backgroundColor: '#fff',
        padding: 10,
        elevation: 5,
        borderRadius: 5
    },
    datas: {
        paddingTop: 20,
        padding:10
    }
});

export default Accounts;
