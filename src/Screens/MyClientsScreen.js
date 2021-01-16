import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import InfoCell from '../Components/InfoCell';

function MyClientsScreen(props) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>My Clients</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/addClient.png')} style={styles.addBtnImg} />
                </TouchableOpacity>
            </View>

            <Text style={styles.desc}>Here are all your clients and their contact infomation. Select a team member to see more details.</Text>

            <ScrollView>
                <InfoCell title='Client Name' email='client@email.com' phone='+12345678' />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        padding: 25,
        paddingBottom: -20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '600',
    },
    desc: {
        fontSize: 14,
        color: '#9E9E9E',
        marginLeft: 25,
        marginRight: 25,
    },
    addBtnImg: {
        width: 30,
        height: 34,
    }
})

export default MyClientsScreen;