import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

function AddNewClientScreen(props) {
    return (
        <SafeAreaView style={styles.mainH}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Add New Client</Text>
                <TouchableOpacity>
                    <Text style={styles.headerButtton}>Add</Text>
                </TouchableOpacity>
                {/* <Button title='Add' style={styles.headerButtton}  /> */}
            </View>
            <KeyboardAvoidingView
                style={{ justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={10}>

                <ScrollView style={styles.form}>
                    <TextInput placeholder='Name' style={styles.textField}></TextInput>
                    <TextInput placeholder='Username' style={styles.textField}></TextInput>
                    <TextInput placeholder='Email' style={styles.textField}></TextInput>
                    <TextInput placeholder='Email' style={styles.textField}></TextInput>
                    <TextInput placeholder='Street' style={styles.textField}></TextInput>
                    <TextInput placeholder='Suite' style={styles.textField}></TextInput>
                    <TextInput placeholder='City' style={styles.textField}></TextInput>
                    <TextInput placeholder='Zip' style={styles.textField}></TextInput>
                    <TextInput placeholder='Latitude' style={styles.textField}></TextInput>
                    <TextInput placeholder='Longitude' style={styles.textField}></TextInput>
                    <TextInput placeholder='Phone' style={styles.textField}></TextInput>
                    <TextInput placeholder='Website' style={styles.textField}></TextInput>
                    <TextInput placeholder='Company Name' style={styles.textField}></TextInput>
                    <TextInput placeholder='Catch Phrase' style={styles.textField}></TextInput>
                    <TextInput placeholder='Business Service' style={styles.textField}></TextInput>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainH: {
        flex: 1
    },
    header: {
        backgroundColor: '#fff',
        height: 40,
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //justifyContent: 'center',
        // alignItems: 'center'
    },
    headerTitle: {
        fontSize: 25,
        left: 10,
        top: 5,
        fontWeight: '600',
        // position: 'absolute',
        //alignSelf: 'center'

    },
    headerButtton: {
        right: 10,
        top: 5,
        fontSize: 17,
        color: 'dodgerblue',
        //alignSelf: 'center'
    },
    form: {
        backgroundColor: '#fff',
        height: '90%',
    },
    textField: {
        width: '90%',
        height: 40,
        left: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9E9E9E',
        padding: 10,
        margin: 10
    }
})

export default AddNewClientScreen;