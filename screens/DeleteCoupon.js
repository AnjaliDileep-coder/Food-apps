import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const DeleteCoupon = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <Text style={styles.dashboard}>Delete Coupon</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Coupon")}>Back</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.texts}>Delete</Text>
            <View style={styles.body}>
                <Text style={styles.text}>Are you sure?</Text>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.text1}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.text2}>No</Text>
                    </TouchableOpacity>
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
        marginRight: 1
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 140,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 1
    },
    back: {
        fontSize: 13,
        paddingLeft: 80,
        paddingTop: 4,
        color: '#696969'
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch: {
        padding: 30
    },
    text1: {
        textAlign: 'center',
        padding: 10,
        width: 100,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 30
    },
    text2: {
        textAlign: 'center',
        padding: 10,
        width: 100,
        height: 40,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 30
    },
    option1: {
        paddingTop: 40,
        alignItems: 'center'
    },
    graph: {
        flexDirection: 'row',
        backgroundColor: '#f5fffa'
    },
    search: {
        padding: 10,
        color: '#696969',
        fontSize: 14
    },
    date: {
        padding: 10,
        color: 'grey',
        fontSize: 14
    },
    graph1: {
        alignItems: 'center'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 200,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        textAlign: 'center',
        color: '#696969',
        fontSize: 15
    },
    options: {
        paddingTop: 10,
    },
    texts: {
        textAlign: 'left',
        paddingLeft: 1,
        paddingBottom:20,
        fontSize: 20,
        color: '#696969'
    },
});

export default DeleteCoupon;