import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Button, Text, TextInputWithIcon } from '../elements';

const Container = styled.View``;

const LabelWrapper = styled.View`
  margin-top: 30;
  margin-left: 15;
  margin-right: 15;
  margin-bottom: 10;
`;

const ButtonStyled = styled(Button)`
  margin-top: 15;
  border-radius: 4;
`;
const ButtonText = styled(Text)`
  color: ${(props) => props.theme.lightShades};
`;

const LoginEmailForm = (props) => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    isLoading,
    errors,
  } = props;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <LabelWrapper>
            <Text semiBold>Enter email address to proceed</Text>
          </LabelWrapper>
          <TextInputWithIcon
            placeholder="Email"
            onChangeText={(email) => setFieldValue('email', email)}
            value={values.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            returnKeyType="next"
            name="email"
            iconColor="#737891"
            lite
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
          />
          <ButtonStyled
            onPress={handleSubmit}
            disabled={isSubmitting || errors.email}
            isLoading={isSubmitting || isLoading}
          >
            <ButtonText>Send Verification Code ✉️</ButtonText>
          </ButtonStyled>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const enhancer = withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Must be valid email')
      .required('Email address is required.'),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values);
    setSubmitting(false);
  },
  displayName: 'LoginEmailForm', // helps with React DevTools
});

export default enhancer(LoginEmailForm);
