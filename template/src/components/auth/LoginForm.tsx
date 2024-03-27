import React from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Box,
  Button,
  ButtonSpinner,
  ButtonText,
  KeyboardAvoidingView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import { FormControl, Input } from '@elements';

export type FormData = {
  email: string;
  password: string;
};

export const defaultProps = {
  loading: false,
  onSubmit: (data: FormData) => console.log('onSubmit props', data),
};

export type Props = {
  loading?: boolean;
  onSubmit: (data: FormData) => void;
} & typeof defaultProps;

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = ({ loading, onSubmit }: Props) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // console.log('LoginForm errors', errors);

  return (
    <KeyboardAvoidingView onTouchStart={() => Keyboard.dismiss()} width="90%">
      <VStack>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl label="Email" isInvalid={errors?.email} isRequired>
              <Input
                type="text"
                placeholder="john@doe.com"
                onBlur={onBlur}
                onChangeText={onChange}
                defaultValue={value}
                value={value}
                autoFocus
                autoCorrect={false}
                autoComplete="email"
                autoCapitalize="none"
              />
            </FormControl>
          )}
        />
        <Box>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormControl
                label="Password"
                isInvalid={errors?.password}
                isRequired
              >
                <Input
                  type="password"
                  placeholder="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  defaultValue={value}
                  value={value}
                  autoCorrect={false}
                  autoComplete="password"
                  autoCapitalize="none"
                />
              </FormControl>
            )}
          />
          <Text
            // mt={-12}
            fontSize="$sm"
            onPress={() => navigation.navigate('PasswordResetScreen')}
          >
            Forgot password?
          </Text>
        </Box>
        <Button
          onPress={handleSubmit(onSubmit)}
          width="100%"
          alignItems="center"
          alignSelf="center"
          size="lg"
          isDisabled={loading}
          mt="$6"
        >
          {loading && <ButtonSpinner mr="$1" />}
          <ButtonText>Login</ButtonText>
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
