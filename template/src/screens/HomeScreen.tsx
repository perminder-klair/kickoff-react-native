import React from 'react';

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
      >
        <Text>My Home Screen</Text>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Hello people!</ButtonText>
        </Button>
      </VStack>
    </Layout>
  );
}
