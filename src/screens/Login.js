import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../components/elements';
import Layout from '../components/Layout';

const Container = styled.View`
  flex: 1;
`;

const Login = () => {
  return (
    <Layout>
      <Container>
        <Text>This is Login page</Text>
      </Container>
    </Layout>
  );
};

Login.navigationOptions = {
  header: null,
};

export default Login;
