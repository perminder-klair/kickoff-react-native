/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import AccountNavigator from './stacks/AccountNavigator';
import HomeNavigator from './stacks/HomeNavigator';
import { RootTabParamList, RootTabScreenProps } from './types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        })}
      />
      <BottomTab.Screen
        name="AccountTab"
        component={AccountNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'AccountTab'>) => ({
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
