import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const GraphicReport = ({ navigation }) => {

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
        marginRight: 5
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 80,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 5
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    graph: {
        flexDirection: 'row',
        backgroundColor: '#f5fffa'
    },
    search: {
        padding: 10,
        color: '#696969',
        fontSize: 14,
        fontFamily: 'semibold'
    },
    date: {
        padding: 10,
        color: '#ddd',
        fontSize: 14,
        fontFamily: 'semibold'
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
        fontSize: 16,
        fontFamily: 'semibold'
    }
});

export default GraphicReport;