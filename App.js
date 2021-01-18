import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/Screens/LoginScreen';
import AddNewClientScreen from './src/Screens/AddNewClientScreen';
import TeamScreen from './src/Screens/TeamScreen';
import MyClientsScreen from './src/Screens/MyClientsScreen';

function TeamSrc() {
  return (
    <TeamScreen />
  );
}

function ClientSrc() {
  return (
    <MyClientsScreen />
  );
}

const Tab = createBottomTabNavigator();

function App(props) {
  return (
    // <LoginScreen />
    // <TeamScreen />
    // <MyClientsScreen />
    // <AddNewClientScreen />
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black'
        }}>
        <Tab.Screen name="Team" component={TeamSrc} options={{
          title: 'My Team',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image style={{ width: 25, height: 25 }} source={require('./src/assets/icons/team.png')} />
              )
            } else {
              return (
                <Image style={{ width: 25, height: 25 }} source={require('./src/assets/icons/team-outline.png')} />
              )
            }
          }
        }} />
        <Tab.Screen name="Clients" component={ClientSrc} options={{
          title: 'My Clients',
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image style={{ width: 25, height: 25 }} source={require('./src/assets/icons/clients.png')} />
              )
            } else {
              return (
                <Image style={{ width: 25, height: 25 }} source={require('./src/assets/icons/clients-outline.png')} />
              )
            }

          }
        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: '#000',
  }
})

export default App;