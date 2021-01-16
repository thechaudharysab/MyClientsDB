import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

function AddNewClientScreen(props) {
    return (
        <SafeAreaView style={styles.mainH}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Add New Client</Text>
                <TouchableOpacity>
                    <Text style={styles.headerButtton}>Save</Text>
                </TouchableOpacity>
                {/* <Button title='Add' style={styles.headerButtton}  /> */}
            </View>

            <KeyboardAvoidingView
                style={{ justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={15}>

                <ScrollView style={styles.form}>
                    <TextInput placeholder='Name' style={styles.textField}></TextInput>
                    <TextInput placeholder='Username' style={styles.textField}></TextInput>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '600',
    },
    headerButtton: {
        fontSize: 17,
        color: 'dodgerblue',
        fontWeight: '700'
    },
    form: {
        backgroundColor: '#fff',
        padding: 15
    },
    textField: {
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#9E9E9E',
        marginBottom: 10,
        padding: 10,
    }
})

export default AddNewClientScreen;