import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

import Logo from './Logo';

const DeleteBanner = ({ navigation }) => {

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
                <Text style={styles.dashboard}>Delete Banner</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Banner")}>Back</Text>
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
    dashboard: {
        fontSize: 18,
        paddingLeft: 110,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 1
    },
    back: {
        fontSize: 13,
        paddingLeft: 100,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold',

    },
    options: {
        paddingTop: 10,
    },
    texts: {
        textAlign: 'left',
        paddingLeft: 1,
        paddingBottom: 20,
        fontSize: 25,
        color: '#696969',
        fontFamily: 'semibold'
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
        fontSize: 14,
        fontFamily: 'semibold'
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
        borderRadius: 30,
        fontSize: 12,
        fontFamily: 'semibold'
    }
});

export default DeleteBanner;