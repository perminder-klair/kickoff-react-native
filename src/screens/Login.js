import React from 'react';
import styled from 'styled-components/native';
import { useStoreActions } from 'easy-peasy';

import Layout from '../components/Layout';
import LoginEmailForm from '../components/forms/LoginEmailForm';
import { KeyboardAvoiding } from '../components/elements';

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
      <KeyboardAvoiding>
        <Container>
          <LoginEmailForm handleSubmit={() => setIsLoggedIn(true)} />
        </Container>
      </KeyboardAvoiding>
    </Layout>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
