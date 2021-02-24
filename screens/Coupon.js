import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const Coupon = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Coupon</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Offer")}>Back</Text>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                <TextInput
                    placeholder="Search by Promocode"
                    style={styles.placeholder}
                    underlineColorAndroid='transparent'>
                </TextInput>
            </TouchableOpacity>
            <View style={styles.body}>
                <Image style={styles.img} source={require("../assets/coupon.jpg")} />
                <Text style={styles.text1}>Valid for all users</Text>
                <Text style={styles.text2}>Min. order amount : 200</Text>
                <View style={styles.optiondata}>
                    <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
                        <Text style={styles.textdata} >View Restaurant</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option1}>
                    <Text style={styles.texts} onPress={() => navigation.navigate("EditCoupon")}>Edit</Text>
                    <Icon name="edit" style={styles.icons} />
                    <Text style={styles.texts} onPress={() => navigation.navigate("DeleteCoupon")}>  Delete</Text>
                    <Icon name="trash" style={styles.icons} />
                </View>
            </View>
            <View style={styles.option}>
                <TouchableOpacity onPress={() => navigation.navigate("AddCoupon")}>
                    <Text style={styles.text} >Add</Text>
                </TouchableOpacity>
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
        marginRight: 31
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 31
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
    },
    body: {
        height: 400,
        width: 300,
        elevation: 8,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 30
    },
    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 220,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontWeight: 'bold'
    },
    touch: {
        paddingTop: 2,
        padding: 20,
        flexDirection: 'row'
    },
    placeholder: {
        width: 280,
        height: 42,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    search: {
        fontSize: 13,
        color: '#696969',
        marginTop: 2
    },
    img: {
        height: 130,
        width: 120
    },
    text1: {
        paddingTop: 30,
        color: '#696969',
        fontSize: 20
    },
    text2: {
        paddingTop: 7,
        color: '#696969',
        fontSize: 13
    },
    optiondata: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 2
    },
    textdata: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 180,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 10,
        fontWeight: 'bold'
    },
    option1: {
        flexDirection: 'row',
        paddingTop: 20
    },
    texts: {
        textAlign: 'center',
        fontSize: 12,
        color: '#d0cbcb',
        paddingLeft: 25
    },
    icons: {
        fontSize: 12,
        marginTop: 1,
        marginLeft: 3,
        color: '#d0cbcb',
        paddingRight: 25
    }
});

export default Coupon;