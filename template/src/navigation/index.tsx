import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  RouteProp,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import useAuth from '@hooks/useAuth';
import { useNavigationPersistence } from '@navigation/navigationUtils';
import * as storage from '@utils/storage';
import { Loading } from '@elements';

import { useStore } from '../store';
import BottomTab from './BottomTab';
import AuthNavigator from './stacks/AuthNavigator';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

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

export interface NavigationProps
  // eslint-disable-next-line prettier/prettier
  extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

const { Screen, Navigator } = createNativeStackNavigator<AppStackParamList>();

// Web linking configuration
const prefixes = ['https://my-app.co.uk', 'my-app://'];
const config = {
  screens: {
    // https://my-app.co.uk/dashboard
    DashboardScreen: 'dashboard',
  },
};

const AppNavigation = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const isLoggedIn = useStore(state => state.isLoggedIn);
  const { logout } = useAuth();

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  useEffect(() => {
    // on app load, if token does not exists, set isLoggedIn to false
    const checkIsLoggedIn = async () => {
      const token = await storage.loadString('token');
      if (!token) {
        logout();
      }
    };
    checkIsLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useBackButtonHandler(routeName => exitRoutes.includes(routeName));

  // Before we show the app, we have to wait for our navigation state to be ready
  if (!isNavigationStateRestored) return <Loading />;

  const linking = {
    prefixes,
    config,
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={linking}
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}
      {...props}
    >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="bottomTab"
          component={isLoggedIn ? BottomTab : AuthNavigator}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
