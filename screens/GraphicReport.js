import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const GraphicReport = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Graphic Report</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Dashboard")}>Back</Text>
            </View>
            <View style={styles.graph}>
                <Text style={styles.search}>Search by Date</Text>
                <Text style={styles.date}>dd/mm/yyyy</Text>
            </View>
            <View style={styles.graph1}>
                <View style={styles.body}>
                    <Text style={styles.text1}>Revenue : Feruary 2021</Text>
                    <Image style={styles.img} source={require("../assets/graph1.jpg")} />
                </View>
                <View><Text></Text></View>
                <View style={styles.body}>
                    <Text style={styles.text1}>Orders : Feruary 2021</Text>
                    <Image style={styles.img} source={require("../assets/graph1.jpg")} />
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
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 1
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
    },
    option: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch: {
        padding: 10
    },
    text: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 120,
        height: 60,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 5,
        elevation: 2
    },
    option1: {
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 250,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 5
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
        height: 250,
        width: 330,
        elevation: 8,
        borderRadius: 8,
        alignItems: 'center',
        paddingTop: 20
    },
    img: {
        height: 200,
        width: 240,
        alignItems: 'center'
    },
    text1: {
        paddingRight: 28,
        color: '#696969',
        fontSize: 16
    }
});

export default GraphicReport;