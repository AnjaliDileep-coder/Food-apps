import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const ActiveOrder = ({ navigation }) => {

    const [loaded] = useFonts({
        bold: require('../assets/fonts/opensansbold.ttf'),
        semibold: require('../assets/fonts/opensanssemibold.ttf'),
        medium: require('../assets/fonts/opensansregular.ttf')
    });
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Active Order</Text>
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
                    <Text style={styles.text5}>Successfully ordered</Text>
                    <View style={styles.option}>
                        <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
                            <Text style={styles.text} >Order Details</Text>
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
        marginRight: 8
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 8
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    body1: {
        flexDirection: 'row'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 520,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        paddingTop: 10
    },   
    number: {
        paddingRight: 20,
        paddingLeft: 10,
        fontSize: 13,
        color: '#696969',
        fontFamily: 'medium'
    },
    date: {
        paddingLeft: 100,
        fontSize: 13,
        color: '#696969',
        fontFamily: 'medium'
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
        paddingTop: 40
    },
    text1: {
        paddingTop: 20,
        fontSize: 20,
        color: '#696969',
        fontFamily: 'bold'
    },
    text2: {
        padding: 3,
        fontSize: 20,
        color: 'red',
        fontFamily: 'semibold'
    },
    text3: {
        padding: 7,
        fontSize: 14,
        color: '#696969',
        fontFamily: 'semibold'
    },
    text4: {
        fontSize: 14,
        color: '#696969',
        fontFamily: 'semibold'
    },
    text5: {
        color: 'green',
        fontSize: 14,
        fontFamily: 'semibold'
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
        width: 170,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontSize: 14,
        fontFamily: 'semibold'
    }
});

export default ActiveOrder;