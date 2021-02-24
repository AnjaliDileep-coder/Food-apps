import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const Settlementsummary = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Settlement Summary</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Accounts2")}>Back</Text>
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                <TextInput
                    placeholder="Search by Order no./Restaurant ID."
                    style={styles.placeholder}
                    underlineColorAndroid='transparent'>
                </TextInput>
            </TouchableOpacity>
            <View style={styles.body}>

                <View style={styles.body1}>

                    <View style={styles.data}>
                        <Text style={styles.text3}>Order No.</Text>
                        <Text style={{ paddingLeft: 62, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Restaurant ID</Text>
                        <Text style={{ paddingLeft: 38, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Restaurant Name</Text>
                        <Text style={{ paddingLeft: 15, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Customer Name</Text>
                        <Text style={{ paddingLeft: 21, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Delivery Date</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Tax</Text>
                        <Text style={{ paddingLeft: 95, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Commission</Text>
                        <Text style={{ paddingLeft: 42, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery Charge</Text>
                        <Text style={{ paddingLeft: 26, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Order Amount</Text>
                        <Text style={{ paddingLeft: 34, fontSize: 13, color: '#696969' }}>:  </Text>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.text3}>Delivery Tip</Text>
                        <Text style={{ paddingLeft: 48, fontSize: 13, color: '#696969' }}>:  </Text>
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
        marginLeft: 1
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 50,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginLeft: 5
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
    touch: {
        paddingTop: 2,
        padding: 20,
        flexDirection: 'row'
    },
    placeholder: {
        width: 300,
        height: 42,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    text3: {
        fontSize: 13,
        color: '#696969',
        padding: 5
    },
    data: {
        flexDirection: 'row',
        paddingRight: 100
    }
});

export default Settlementsummary;