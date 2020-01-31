/* eslint global-require: 0 */

import React, { useEffect, useState } from 'react';
import { StoreProvider, useStoreState } from 'easy-peasy';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';

import { store, persistor } from './store';
import theme from './utils/theme';
import initNavigation from './screens';
import { Loading } from './components/elements';
import Splash from './screens/Splash';

console.disableYellowBox = true;

const AppInner = () => {
  const isLoggedIn = useStoreState(state => state.user.isLoggedIn);

  const Navigation = initNavigation({
    isLoggedIn,
  });

  return <Navigation />;
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Italic': require('./assets/fonts/Raleway-Italic.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <StoreProvider store={store}>
          <>{fontLoaded ? <AppInner /> : <Loading />}</>
        </StoreProvider>
      </PersistGate>
    </ThemeProvider>
  );
};

export default App;
