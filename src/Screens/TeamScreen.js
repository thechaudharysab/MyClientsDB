import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Alert, ScrollView } from 'react-native';
import InfoCell from '../Components/InfoCell';
import axios from 'axios';

function TeamScreen(props) {

    const [teamMembers, setTeamMembers] = useState([]);
    const TEAM_MEMBERS_URL = 'https://jsonplaceholder.typicode.com/users';

    const getMembers = async () => {
        try {
            const myTeam = await axios.get(TEAM_MEMBERS_URL)
            setTeamMembers(myTeam.data);
        } catch (err) {
            Alert.alert(err);
        }
    }

    useEffect(() => {
        getMembers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>My Team</Text>
            <Text style={styles.desc}>Here is the team and contact infomation. Select a team member to see more details.</Text>
            <ScrollView>
                {teamMembers.map(teamMember => (
                    <InfoCell title={teamMember.name} email={teamMember.email} phone={teamMember.phone} />
                ))}
            </ScrollView>
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