import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider, useStoreState } from 'easy-peasy';

import { store } from './store';
import theme from './utils/theme';
import initNavigation from './screens';

console.disableYellowBox = true;

const App = () => {
  const isLoggedIn = false;
  // const isLoggedIn = useStoreState(state => state.isLoggedIn.value);

  const Navigation = initNavigation({
    isLoggedIn,
  });

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
