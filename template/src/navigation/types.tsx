/**
 * Shared types for navigation
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// declare global {
//   namespace ReactNavigation {
//     type RootParamList = RootStackParamList;
//   }
// }

export type RootTabParamList = {
  HomeTab: undefined;
  AccountTab: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type AuthStackParams = {
  LandingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  PasswordResetScreen: undefined;
};

export type SharedScreenParams = {
  // ADDITIONAL SCREENS WILL GO HERE
  // SCREEN1: { param1: string, param2: number}
};

export type HomeStackParams = {
  DashboardScreen: undefined;
};

export type AccountStackParams = {
  AccountScreen: undefined;
  NotificationsScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
