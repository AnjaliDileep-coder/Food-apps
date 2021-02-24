import React from 'react';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const PendingOrder = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Pending Order</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Dashboard")}>Back</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.body1}>
                    <Text style={styles.number}>Order no: 01</Text>
                    <Text style={styles.date}>Date: 14/02/2021</Text>
                </View>
                <View style={styles.image1}>
                    <Image style={styles.image} source={require("../assets/burger.jpg")} />
                    <Text style={styles.text1}>Burger * 2 More</Text>
                    <Text style={styles.text2}>Rs.0.00</Text>
                    <Text style={styles.text3}>Payment : Cash</Text>
                    <Text style={styles.text3}>Order Price : 0.0</Text>
                    <Text style={styles.text3}>Contact User :</Text>
                    <Text style={styles.text4}>+91 123456789</Text>
                    <View style={styles.option}>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>Confirm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touch}>
                            <Text style={styles.text}>Reject</Text>
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
        marginRight: 4
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 4
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
    },
    body1: {
        flexDirection: 'row'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 500,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        paddingTop: 10
    },
    date: {
        paddingLeft: 100,
        color: '#696969',
        fontSize: 12
    },
    number: {
        paddingRight: 30,
        paddingLeft: 10,
        color: '#696969',
        fontSize: 12
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 10
    },
    image1: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 50
    },
    text1: {
        paddingTop: 20,
        fontSize: 20,
        color: '#696969',
        fontWeight: 'bold'
    },
    text2: {
        padding: 3,
        fontSize: 20,
        color: 'red'
    },
    text3: {
        padding: 7,
        fontSize: 14,
        color: '#696969',
    },
    text4: {
        fontSize: 14,
        color: '#696969',
        paddingBottom: 10
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch: {
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center',
        padding: 10,
        width: 110,
        height: 40,
        backgroundColor: '#FDC913',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 3,
        fontWeight: 'bold',
        fontSize: 14
    },
});

export default PendingOrder;