import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import InfoCell from '../Components/InfoCell';

function TeamScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>My Team</Text>
            <Text style={styles.desc}>Here is the team and contact infomation. Select a team member to see more details.</Text>
            <InfoCell />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: 25,
        marginLeft: 25,
        marginBottom: 10,
    },
    desc: {
        fontSize: 14,
        color: '#9E9E9E',
        marginLeft: 25
    },

})

export default TeamScreen;