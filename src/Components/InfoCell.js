import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

function InfoCell(props) {
    return (
        <TouchableOpacity style={styles.cell}>
            <View style={styles.cellDetailView}>
                <Text style={styles.cellTitle}>Leanne Graham</Text>
                <Text style={styles.cellInfoText}>Sincere@april.biz</Text>
                <Text style={styles.cellInfoText}>1-770-736-8031 x56442</Text>
            </View>
            <View style={styles.cellIconView}>
                <Image source={require('../assets/icons/next.png')} style={styles.cellNextIcon} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cell: {
        padding: 15,
        margin: 20,
        shadowColor: '#000',
        shadowOpacity: 0.20,
        shadowOffset: { width: 1, height: 1, },
        backgroundColor: '#fff',
        height: 85,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cellDetailView: {
        height: 62,
    },
    cellTitle: {
        fontSize: 25,
        color: '#4A90E2',
        fontWeight: '500',
    },
    cellInfoText: {
        fontSize: 12,
        color: '#9E9E9E',
    },
    cellIconView: {
        height: 20,
    },
    cellNextIcon: {
        width: 20,
        height: 20,
        opacity: 0.50,
    }
})

export default InfoCell;