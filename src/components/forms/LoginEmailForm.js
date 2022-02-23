import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/native';

import { Button, Text, TextInputGroup } from '../elements';

const Container = styled.View``;

const LabelWrapper = styled.View`
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 15px;
`;

const LoginEmailForm = (props) => {
  const {
    values,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    errors,
  } = props;

  return (
      <Container>
          <LabelWrapper>
            <Text semiBold>Enter email address to proceed</Text>
          </LabelWrapper>
          <TextInputGroup
            placeholder="Email"
            onChangeText={(email) => setFieldValue('email', email)}
            value={values.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            returnKeyType="next"
            name="email"
            error={errors.email}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
          />
          <ButtonStyled
            onPress={handleSubmit}
            disabled={isSubmitting}
            isLoading={isSubmitting}
            title="Send Verification Code ✉️"
          >
          </ButtonStyled>
      </Container>
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
