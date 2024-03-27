import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../../screens/LandingScreen';
import LoginScreen from '../../screens/LoginScreen';
import PasswordResetScreen from '../../screens/PasswordResetScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import stackNavigatorOptions from '../stackNavigatorOptions';
import { AuthStackParams } from '../types';

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PasswordResetScreen"
        component={PasswordResetScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Group>
  </Stack.Navigator>
);

export default AuthNavigator;
