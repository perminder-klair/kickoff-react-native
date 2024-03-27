import React, { useEffect } from 'react';
import { Alert, LogBox } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@navigation';
import NetInfo, { type NetInfoState } from '@react-native-community/netinfo';

import { GluestackUIProvider, Text } from '@gluestack-ui/themed';

import useCachedResources from '@hooks/useCachedResources';
import { queueLink } from '@utils/apollo-client';
import { config as styles } from '@styles';

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
    return <Text>Loading...</Text>;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default function Root() {
  return (
    <GluestackUIProvider config={styles}>
      <App />
    </GluestackUIProvider>
  );
}
