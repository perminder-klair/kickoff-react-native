import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './Splash';
import Login from './Login';
import Dashboard from './Dashboard';
import Test from './Test';

const LoginStack = createStackNavigator({
  Login,
});

const MainStack = createStackNavigator({
  Dashboard,
});

export default ({ isLoggedIn }) => {
  let app = MainStack;
  // if (!isLoggedIn) {
  //   app = LoginStack;
  // }

  return createAppContainer(
    createSwitchNavigator({
      // Test, // TODO: for testing add screen here
      Splash,
      App: app,
    }),
  );
};
