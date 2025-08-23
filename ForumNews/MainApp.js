import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ClimaScreen from './screens/ClimaScreen';

const Drawer = createDrawerNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Clima" component={ClimaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
