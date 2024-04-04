import React, { useEffect } from 'react';
import { Alert, LogBox } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import Navigation from '@navigation';
import NetInfo, { type NetInfoState } from '@react-native-community/netinfo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { GluestackUIProvider } from '@gluestack-ui/themed';

import useCachedResources from '@hooks/useCachedResources';
import { queueLink } from '@utils/apollo-client';
import { config as styles } from '@styles';
import { Loading } from '@elements';

LogBox.ignoreAllLogs();

function App() {
  const { isLoadingComplete, client } = useCachedResources();

  const checkIsNetworkOnline = () => {
    NetInfo.addEventListener((state: NetInfoState) => {
      if (!state.isConnected) {
        Alert.alert('No Internet 📡', 'Please check your network settings');
        queueLink.close();
      } else {
        queueLink.open();
      }
    });
  };

  useEffect(() => {
    checkIsNetworkOnline();
  }, []);

  if (!isLoadingComplete) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}

export default function Root() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GluestackUIProvider config={styles}>
          <App />
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
