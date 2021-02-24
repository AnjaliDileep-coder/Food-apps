import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';

import Logo from './Logo';

function Offer({ navigation }) {

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
                <Text style={styles.dashboard}>Offer</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Dashboard")}>Back</Text>
            </View>
            <View style={styles.option}>
                <Text style={styles.text}>Offer</Text>
                <View style={styles.option1}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Banner")}>
                        <Text style={styles.button}>Banner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Coupon")}>
                        <Text style={styles.button}>Coupon</Text>
                    </TouchableOpacity>
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
        marginRight: 40
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 40
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    option: {
        paddingTop: 10
    },
    text: {
        textAlign: 'left',
        paddingLeft: 20,
        fontSize: 25,
        color: '#696969',
        fontFamily: 'semibold'
    },
    option1: {
        paddingTop: 20,
        alignItems: 'center'
    },
    touch: {
        padding: 20
    },
    button: {
        textAlign: 'center',
        padding: 10,
        width: 250,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 5,
        fontSize: 14,
        color: '#696969',
        fontFamily: 'semibold'
    }
});

export default Offer;