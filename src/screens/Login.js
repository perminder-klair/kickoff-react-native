import React from 'react';
import styled from 'styled-components/native';
import { useStoreActions } from 'easy-peasy';

import { Button } from '../components/elements';
import Layout from '../components/Layout';
// import LoginEmailForm from '../components/forms/LoginEmailForm';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 50px;
`;

const Login = () => {
  const setIsLoggedIn = useStoreActions(
    (actions) => actions.user.setIsLoggedIn,
  );

  return (
    <Layout>
      <Container>
        {/* <LoginEmailForm /> */}
        <Button title="Login" onPress={() => setIsLoggedIn(true)} />
        {/* <Loading /> */}
      </Container>
    </Layout>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
