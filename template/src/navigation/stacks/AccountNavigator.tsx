import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../../screens/AccountScreen';
// import NotificationsScreen from '../screens/NotificationsScreen';
import stackNavigatorOptions from '../stackNavigatorOptions';
import { AccountStackParams } from '../types';

const Stack = createNativeStackNavigator<AccountStackParams>();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...stackNavigatorOptions,
    }}
  >
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        // add navigation options here...
        title: 'Account',
      }}
    />
    <Stack.Screen name="NotificationsScreen" component={AccountScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
