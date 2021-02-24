import React from 'react';
import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const OrderDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Order Details</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("ActiveOrder")}>Back</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.image1}>
                    <Image style={styles.image} source={require("../assets/burger.jpg")} />
                    <View style={styles.view}>
                        <Text style={styles.text1}>Burger * 2 More</Text>
                        <Text style={styles.text2}>Rs.0.00</Text>
                    </View>
                </View>
                <View style={styles.body1}>

                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Date</Text>
                        <Text style={{ paddingLeft: 50, fontSize: 13, color: '#696969' }}>: 15-02-2021</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Payment mode</Text>
                        <Text style={{ paddingLeft: 24, fontSize: 13, color: '#696969' }}>: Cash</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Restaurant Name</Text>
                        <Text style={{ paddingLeft: 10, fontSize: 13, color: '#696969' }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Address</Text>
                        <Text style={{ paddingLeft: 65, fontSize: 13, color: '#696969' }}>: ABC</Text>
                    </View>

                    <Text style={styles.text5}>Bill Details</Text>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Username</Text>
                        <Text style={{ paddingLeft: 55, fontSize: 13, color: '#696969' }}>: XYZ</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Phone</Text>
                        <Text style={{ paddingLeft: 77, fontSize: 13, color: '#696969' }}>: +91 123456789</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Address</Text>
                        <Text style={{ paddingLeft: 66, fontSize: 13, color: '#696969' }}>: ABC</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Price</Text>
                        <Text style={{ paddingLeft: 49, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery charge</Text>
                        <Text style={{ paddingLeft: 25, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Tax</Text>
                        <Text style={{ paddingLeft: 93, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery Tip</Text>
                        <Text style={{ paddingLeft: 46, fontSize: 13, color: '#696969' }}>: 0.00</Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Total</Text>
                        <Text style={{ paddingLeft: 84, fontSize: 13, color: '#696969' }}>: 0.00</Text>
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
        marginRight: 10
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 10
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
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
    image: {
        width: 150,
        height: 100,
        borderRadius: 8
    },
    image1: {
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        paddingBottom: 30
    },
    text1: {
        paddingTop: 20,
        fontSize: 16,
        color: '#696969',
        fontWeight: 'bold'
    },
    text2: {
        padding: 3,
        fontSize: 16,
        color: 'red'
    },
    view: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 10,
        alignItems: 'center'
    },
    body1: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 330,
        width: 330
    },
    text3: {
        paddingLeft: 40,
        fontSize: 13,
        color: '#696969'
    },
    text5: {
        padding: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    data: {
        flexDirection: 'row'
    }
});

export default OrderDetails;