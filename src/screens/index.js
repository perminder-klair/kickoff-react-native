/* eslint react/display-name:0 */
/* eslint react/prop-types: 0 */

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import Splash from './Splash';
import Login from './Login';
import MailList from './MailList';

const defaultNavigationOptions = {};

const LoginStack = createStackNavigator({
  Login,
  // SyncContacts,
  // AccountLoading,
  // ConnectAccount,
});

const MainStack = createStackNavigator(
  {
    MailList,
    // CreateMail,
    // ComposeMail,
    // UpdateContact,
    // DeclineProduct,
    // ProfileView,
    // RemoveAccount,
    // SearchResults,
  },
  {
    defaultNavigationOptions,
  },
);

export default ({ isLoggedIn }) => {
  let app = MainStack;
  if (!isLoggedIn) {
    app = LoginStack;
  }

  return createAppContainer(
    createSwitchNavigator({
      Login, // TODO: for testing add screen here
      Splash,
      App: app,
    }),
  );
};
