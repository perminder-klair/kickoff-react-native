import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountNavigator from './stacks/AccountNavigator';
import HomeNavigator from './stacks/HomeNavigator';
import { RootTabParamList, RootTabScreenProps } from './types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Home',
        })}
      />
      <BottomTab.Screen
        name="AccountTab"
        component={AccountNavigator}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options={({ navigation }: RootTabScreenProps<'AccountTab'>) => ({
          title: 'Account',
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
