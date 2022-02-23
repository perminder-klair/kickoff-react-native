import React from 'react';
import styled from 'styled-components/native';
import { useStoreActions } from 'easy-peasy';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Layout from '../components/Layout';
import LoginEmailForm from '../components/forms/LoginEmailForm';

const Container = styled.View`
  margin-horizontal: 40px;
  flex: 1;
  justify-content: center;
`;

const Login = () => {
  const setIsLoggedIn = useStoreActions(
    (actions) => actions.user.setIsLoggedIn,
  );

  return (
    <Layout>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1, background:"red"}}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <LoginEmailForm handleSubmit={() => setIsLoggedIn(true)}/>
      </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </Layout>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
