import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import stackNavigatorOptions from '../stackNavigatorOptions';
import { HomeStackParams } from '../types';

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardScreen" component={HomeScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default HomeNavigator;
