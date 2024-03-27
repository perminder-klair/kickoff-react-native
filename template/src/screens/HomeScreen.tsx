import React from 'react';
import { Alert } from 'react-native';

import { Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';

import Layout from '@components/Layout';

export default function HomeScreen() {
  return (
    <Layout hasSafeArea={true}>
      <VStack
        gap={8}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
      >
        <Text>My Home Screen</Text>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => {
            Alert.alert('Button clicked!');
          }}
        >
          <ButtonText>Click me!</ButtonText>
        </Button>
      </VStack>
    </Layout>
  );
}
