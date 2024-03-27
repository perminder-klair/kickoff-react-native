import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Box,
  Button,
  ButtonGroup,
  ButtonText,
  Text,
} from '@gluestack-ui/themed';

import useAuth from '@hooks/useAuth';
import { AuthStackParams } from '@navigation/types';
import config from '@utils/config';
import Layout from '@components/Layout';

type Props = NativeStackScreenProps<AuthStackParams, 'LandingScreen'>;

export default function LandingScreen({ navigation }: Props) {
  const { login } = useAuth();

  const handleSkipLogin = async () => {
    console.log('handleSkipLogin');

    await login({ user: { email: 'abc@abc.com' }, token: '1234567890' });
    return true;
  };

  return (
    <Layout hasSafeArea={false}>
      <Box
        justifyContent="space-evenly"
        h="100%"
        bgColor="$secondary800"
        py={20}
      >
        <Box alignItems="center">
          <Text color="$white" size="6xl">
            {config?.appName}
          </Text>
        </Box>
        <Box>
          <ButtonGroup flexDirection="column" px={20}>
            <Button
              width="100%"
              action="primary"
              onPress={() => navigation.push('LoginScreen')}
            >
              <ButtonText>Login</ButtonText>
            </Button>
            <Button
              width="100%"
              action="secondary"
              bgColor="$white"
              onPress={() => navigation.push('LoginScreen')}
            >
              <ButtonText color="$primary800">Create an account</ButtonText>
            </Button>
            {config?.isDev && (
              <Button
                width="100%"
                variant="outline"
                bgColor="$rose100"
                onPress={handleSkipLogin}
              >
                <ButtonText color="$primary800">Skip</ButtonText>
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </Box>
    </Layout>
  );
}
