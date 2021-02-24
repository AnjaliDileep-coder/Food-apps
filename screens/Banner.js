import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import Logo from './Logo';

const Banner = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <TouchableOpacity>
                    <Icon name="bars" style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.dashboard}>Banner</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Offer")}>Back</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.banner}>Banner</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddBanner")}>
                        <Text style={styles.add}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.round}>
                <View style={styles.touchable}>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.touchable}>
                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon name="trash" style={styles.icon} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.touch}>
                        <View style={styles.body} >
                            <Text style={styles.circle} >50% Off</Text>
                            <Text style={styles.text} >Restaurant name</Text>
                            <Text style={styles.text} >Start date</Text>
                            <Text style={styles.text} >Expiry date</Text>
                            <View style={styles.option}>
                                <Text style={styles.text1} onPress={() => navigation.navigate("EditBanner")}>Edit</Text>
                                <Icon name="edit" style={styles.icon} />
                                <Text style={styles.text1} onPress={() => navigation.navigate("DeleteBanner")}>  Delete</Text>
                                <Icon name="trash" style={styles.icon} />
                            </View>
                        </View>
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
        marginRight: 34
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 100,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 34
    },
    back: {
        fontSize: 13,
        paddingLeft: 90,
        paddingTop: 4,
        color: '#696969'
    },
    options: {
        flexDirection: 'row'
    },
    banner: {
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 20,
        color: '#696969'
    },
    button: {
        paddingLeft: 130
    },
    add: {
        textAlign: 'center',
        borderWidth: 0.5,
        padding: 10,
        width: 80,
        height: 40,
        borderColor: '#dddddd',
        backgroundColor: '#FDC913',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontWeight: 'bold'
    },
    round: {
        paddingTop: 20,
        alignItems: 'center'
    },
    touchable: {
        flexDirection: 'row'
    },
    touch: {
        padding: 25
    },
    body: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 170,
        width: 120,
        elevation: 8,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        alignContent: 'center'
    },
    circle: {
        textAlign: 'center',
        borderWidth: 2,
        padding: 10,
        width: 60,
        height: 60,
        borderColor: 'white',
        backgroundColor: '#ed5959',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: '#696969'
    },
    option: {
        flexDirection: 'row',
        paddingTop: 20
    },
    text1: {
        textAlign: 'center',
        fontSize: 12,
        color: '#d0cbcb'
    },
    icon: {
        fontSize: 12,
        marginTop: 1,
        marginLeft: 3,
        color: '#d0cbcb'
    }
});

export default Banner;