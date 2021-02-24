import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Logo from './Logo';

function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Dashboard</Text>
            </View>

            <View style={styles.option}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Pending Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Active Order</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Delivered Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Customer Cancellation</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Restaurant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Categories</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Food Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Promotions</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.option1}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("GraphicReport")}>
                    <Text style={styles.button}>Graphic Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("PendingOrder")}>
                    <Text style={styles.button}>Pending Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("ActiveOrder")}>
                    <Text style={styles.button}>Active Order</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                    <Text style={styles.button}>Offer</Text>
                </TouchableOpacity>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fffa',
        paddingBottom: '200%'
    },
    head: {
        flexDirection: 'row',
        backgroundColor: '#f5fffa',
        marginTop: 80
    },
    menu: {
        fontSize: 20,
        color: '#FDC913',
        marginTop: 2,
        marginLeft: 16
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 113,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold'
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
        color: '#f5fffa',
        borderRadius: 5,
        elevation: 2,
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 20
    },
    option1: {
        paddingTop: 40,
        alignItems: 'center'
    },
    button: {
        textAlign: 'center',
        padding: 10,
        width: 250,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 5,
        fontSize: 14,
        color: '#696969',
    }
});

export default Dashboard;