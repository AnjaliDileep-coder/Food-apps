import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/AntDesign'
import ImageIcon from '@material-ui/icons/Image';

import Logo from './Logo';

function EditBanner({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.head}>
                <Text style={styles.dashboard}>Edit Banner</Text>
                <Text style={styles.back} onPress={() => navigation.navigate("Banner")}>Back</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.input}>Restaurant Name</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Restaurant Branch</Text>
                <TextInput style={styles.input1} />
                <View style={styles.category}>
                    <Text style={styles.input}>Category</Text>
                    <Icon1 name="caretdown" style={styles.dropdown} />
                </View>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Banner Validity</Text>
                <TextInput style={styles.input1} />
                <Text style={styles.input}>Banner Name</Text>
                <TextInput style={styles.input1} />
                <View style={styles.image}>
                    <Text style={styles.input}>Banner Image</Text>
                    <Icon1 name="picture" style={styles.img} />
                </View>
                <TextInput style={styles.input1} />
            </View>
            <View style={styles.option}>
                <TouchableOpacity>
                    <Text style={styles.text} >Save</Text>
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
        paddingBottom: 40
    },
    dashboard: {
        fontSize: 18,
        paddingLeft: 150,
        paddingBottom: 5,
        color: '#696969',
        fontWeight: 'bold',
        marginRight: 1
    },
    back: {
        fontSize: 13,
        paddingLeft: 100,
        paddingTop: 4,
        color: '#696969'
    },
    body: {
        fontSize: 25,
        color: '#696969'
    },
    input: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 2,
        color: '#696969'
    },
    input1: {
        borderColor: '#fff',
        borderBottomColor: '#696969',
        borderWidth: 1,
        marginBottom: 10,
        width: 300
    },
    category: {
        flexDirection: 'row'
    },
    dropdown: {
        paddingLeft: 200,
        paddingTop: 10,
        fontSize: 15,
        color: '#696969'
    },
    image: {
        flexDirection: 'row'
    },
    img: {
        paddingLeft: 172,
        paddingTop: 10,
        fontSize: 15,
        color: '#696969'
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
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5fffa',
        borderRadius: 30,
        elevation: 5,
        fontWeight: 'bold'
    }
});

export default EditBanner;