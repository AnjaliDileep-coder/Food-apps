import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useFonts } from 'expo-font';

import Logo from './Logo';

const Accounts2 = ({ navigation }) => {

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
                <Text style={styles.dashboard}>Accounts</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Offer")}>Back</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.body2}>
                    <TouchableOpacity onPress={() => navigation.navigate("Accounts")}>
                        <Text style={styles.button1}>Statements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Accounts2")}>
                        <Text style={styles.button2}>Settlements</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body3}>
                    <TouchableOpacity style={styles.touched}>
                        <Text style={styles.button4}>Total Amount</Text>
                        <Text style={styles.button3}>To Restaurant</Text>
                        <Text style={styles.button4}>Rs 200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touched}>
                        <Text style={styles.button4}>Total Amount</Text>
                        <Text style={styles.button3}>To Restaurant</Text>
                        <Text style={styles.button4}>Rs 200</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Settlementsummary")}>
                <Text style={styles.button}>Settlement summary</Text>
            </TouchableOpacity>
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
        marginRight: 22
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 22
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 300,
        width: 330,
        elevation: 8,
        borderRadius: 8
    },
    body2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 40
    },
    button1: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'semibold'
    },
    button2: {
        textAlign: 'center',
        padding: 12,
        width: 165,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 10,
        fontSize: 16,
        color: '#696969',
        borderRadius: 2,
        fontFamily: 'semibold'
    },
    body3: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button3: {
        textAlign: 'center',
        padding: 3,
        height: 30,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        borderColor: '#696969',
        fontSize: 14,
        color: '#696969',
        borderRadius: 5,
        fontFamily: 'medium'
    },
    button4: {
        textAlign: 'center',
        padding: 3,
        height: 30,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        borderColor: '#696969',
        fontSize: 14,
        color: '#696969',
        borderRadius: 5,
        fontWeight: 'bold',
        fontFamily: 'bold'
    },
    touched: {
        paddingTop: 20,
        borderWidth: 1,
        fontSize: 14,
        borderColor: '#696969',
        width: 130,
        height: 150,
        padding: 10
    },
    touch: {
        padding: 30
    },
    button: {
        textAlign: 'center',
        padding: 15,
        width: 330,
        height: 50,
        borderColor: '#dddddd',
        backgroundColor: '#fff',
        elevation: 8,
        fontSize: 15,
        color: '#696969',
        borderRadius: 8,
        fontFamily: 'semibold'
    }
});

export default Accounts2;