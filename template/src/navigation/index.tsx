import React, { useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useAuth from '@hooks/useAuth';

import { useStore } from '../store';
import BottomTab from './BottomTab';
import AuthNavigator from './stacks/AuthNavigator';

export type AppStackParamList = {
  splash: undefined;
  bottomTab: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, RouteName>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<
    AppStackParamList,
    RouteName
  >;
};

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const isLoggedIn = useStore(state => state.isLoggedIn);
  const { logout } = useAuth();

  useEffect(() => {
    // on app load, if token does not exists, set isLoggedIn to false
    const checkIsLoggedIn = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        logout();
      }
    };
    checkIsLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="bottomTab"
        component={isLoggedIn ? BottomTab : AuthNavigator}
      />
    </Navigator>
  );
};

export default AppStack;
