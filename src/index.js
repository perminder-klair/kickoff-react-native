/* eslint global-require: 0 */

import React, { useEffect, useState } from 'react';
import { StoreProvider, useStoreState } from 'easy-peasy';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';

import { store, persistor } from './store';
import theme from './utils/theme';
import Navigation from './screens';
import Splash from './screens/Splash';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const AppInner = () => {
  const isLoggedIn = useStoreState((state) => state.user.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return <Navigation isLoggedIn={isLoggedIn} />;
};

const AppMain = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    });
    setTimeout(() => setFontLoaded(true), 400);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <StoreProvider store={store}>
          <>{fontLoaded ? <AppInner /> : <Splash />}</>
        </StoreProvider>
      </PersistGate>
    </ThemeProvider>
  );
};

export default AppMain;
