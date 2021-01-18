import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import InfoCell from '../Components/InfoCell';
import AddNewClientScreen from '../Screens/AddNewClientScreen';


const ClientSrc = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* 
            <View style={styles.headerView}>
                <Text style={styles.headerTitle}>My Clients</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddClients')}>
                    <Image source={require('../assets/addClient.png')} style={styles.addBtnImg} />
                </TouchableOpacity>
            </View>

            <Text style={styles.desc}>Here are all your clients and their contact infomation. Select a team member to see more details.</Text> */}

            <ScrollView>
                <InfoCell title='Client Name' email='client@email.com' phone='+12345678' />
            </ScrollView>
        </SafeAreaView>
    );
}

const AddClientSrc = () => {
    return (
        <AddNewClientScreen />
    );
}

const Stack = createStackNavigator();

function MyClientsScreen(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Clients' component={ClientSrc} options={({ navigation }) => ({
                title: 'My Clients',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('AddClients')}>
                        <Image source={require('../assets/addClient.png')} style={styles.addBtnImg} />
                    </TouchableOpacity>
                ),
            })} />
            <Stack.Screen name='AddClients' component={AddClientSrc} options={{
                title: 'Add New Client',
                headerRight: () => (
                    <TouchableOpacity>
                        <Text style={styles.headerButtton}>Save</Text>
                    </TouchableOpacity>
                )
            }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // headerView: {
    //     padding: 25,
    //     paddingBottom: -20,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    // headerTitle: {
    //     fontSize: 25,
    //     fontWeight: '600',
    // },
    // desc: {
    //     fontSize: 14,
    //     color: '#9E9E9E',
    //     marginLeft: 25,
    //     marginRight: 25,
    // },
    addBtnImg: {
        width: 30,
        height: 34,
        margin: 20
    },
    headerButtton: {
        fontSize: 17,
        color: 'dodgerblue',
        fontWeight: '700',
        margin: 10
    },
})

export default MyClientsScreen;