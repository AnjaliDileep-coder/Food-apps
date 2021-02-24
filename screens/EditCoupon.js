import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import { useFonts } from 'expo-font';

function EditCoupon({ navigation }) {

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
                <Text style={styles.dashboard}>Edit Coupon</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Coupon")}>Back</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.input}>Coupon Code Name</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Code Description</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Code Discount</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Minimum Basket Value</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Bearer</Text>
                <Text style={styles.input}>Commission</Text>
                <Text style={styles.input}>Total no. of Vouchers</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>No. of Redeems allowed for Users</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Coupon Validity</Text>
                <TextInput style={styles.input1} />
            </View>
            <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Offer")}>
                <TextInput
                    placeholder="Select Restaurant"
                    style={styles.placeholder}
                    underlineColorAndroid='transparent'>
                </TextInput>
            </TouchableOpacity>
            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
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
        paddingBottom: 20
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 130,
        paddingBottom: 1,
        color: '#696969',
        fontFamily: 'semibold',
        marginRight: 1
    },
    back: {
        fontSize: 13,
        paddingLeft: 100,
        paddingTop: 4,
        color: '#696969',
        fontFamily: 'semibold'
    },
    body: {
        fontSize: 25,
        color: '#696969'
    },
    input: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 1,
        color: '#696969',
        fontFamily: 'semibold'
    },
    input1: {
        borderColor: '#fff',
        borderBottomColor: '#696969',
        borderWidth: 1,
        marginBottom: 5,
        width: 300
    },
    touch: {
        paddingTop: 2,
        padding: 10,
        flexDirection: 'row'
    },
    placeholder: {
        width: 300,
        height: 35,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        elevation: 4,
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
        fontSize:14,
        fontFamily: 'semibold'
    }
});

export default EditCoupon;