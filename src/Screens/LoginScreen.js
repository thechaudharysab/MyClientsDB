import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>MyClientsDB</Text>
            <Text style={styles.desc}>Welcome to learning react native. Please login below to continue</Text>
            <TouchableOpacity style={styles.googleLoginButton}>
                <Text style={styles.googleLoginText}>Login with </Text>
                <Image
                    source={require('../assets/googleLogo.png')}
                    style={styles.googleLoginImage}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotBtnText}>Unable to Login?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#888',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        color: 'dodgerblue'
    },
    desc: {
        fontSize: 17,
        width: '90%',
        textAlign: 'center',
        color: '#000',
        top: 10,
    },
    googleLoginButton: {
        width: '90%',
        height: 48,
        top: 30,
        shadowColor: '#000',
        shadowOpacity: 0.20,
        shadowOffset: { width: 2, height: 2, },
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,

    },
    googleLoginImage: {
        width: 74,
        height: 25,
    },
    googleLoginText: {
        right: '20%',
        color: '#9E9E9E',
        fontSize: 14,
    },
    forgotBtnText: {
        top: 45,
        color: 'dodgerblue',
    }
})

export default LoginScreen;