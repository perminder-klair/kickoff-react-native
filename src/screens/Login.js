import React from 'react';
import styled from 'styled-components/native';
import { useStoreActions } from 'easy-peasy';

import { Text, Button } from '../components/elements';
import Layout from '../components/Layout';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 50;
`;

const Login = () => {
  const setIsLoggedIn = useStoreActions(
    (actions) => actions.user.setIsLoggedIn,
  );

  return (
    <Layout>
      <Container>
        <Text>This is Login page</Text>
        <Button title="Login" onPress={() => setIsLoggedIn(true)} />
      </Container>
    </Layout>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
