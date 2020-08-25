import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '../components/elements';
import theme from '../utils/theme';
import Splash from './Splash';
import Login from './Login';
import Dashboard from './Dashboard';
import Account from './Account';
import Test from './Test';

const navigationOptions = ({ icon }) => {
  const options = {};
  options.tabBarIcon = ({ color }) => (
    <Icon name={icon} size={25} color={color} />
  );
  return options;
};

const LoginStack = createStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

const MainStack = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: theme.textColor,
  inactiveTintColor: theme.textColorLite,
  style: {
    backgroundColor: theme.primaryColor,
    paddingTop: Platform.OS === 'ios' ? 0 : 22,
    paddingBottom: Platform.OS === 'ios' ? 0 : 10,
    boxShadow: 'none',
    borderTop: 0,
  },
};
function MainStackScreen() {
  return (
    <MainStack.Navigator tabBarOptions={tabBarOptions}>
      <MainStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={navigationOptions({ icon: 'explore' })}
      />
      <MainStack.Screen
        name="Account"
        component={ProfileStackScreen}
        options={navigationOptions({ icon: 'person' })}
      />
    </MainStack.Navigator>
  );
}

const AppStack = createStackNavigator();
function App({ isLoggedIn, isAnonymous }) {
  // console.log('app', isLoggedIn, isAnonymous);
  let app = MainStackScreen;
  if (!isLoggedIn) {
    app = LoginStackScreen;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        {/* <AppStack.Screen name="Test" component={Test} /> */}
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="App" component={app} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
