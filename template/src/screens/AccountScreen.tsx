import React from 'react';

import { Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';

import useAuth from '@hooks/useAuth';
import Layout from '@components/Layout';

export default function AccountScreen() {
  const { logout } = useAuth();

  return (
    <Layout hasSafeArea={false}>
      <VStack
        gap={8}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
      >
        <Text>Account Screen</Text>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={logout}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </VStack>
    </Layout>
  );
}
