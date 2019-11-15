import React from 'react';
import styled from 'styled-components/native';

import Layout from '../components/Layout';
import { Text } from '../components/elements';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const Heading = styled(Text)``;

const LoginScreen = () => (
  <Layout>
    <Container>
      <Heading>LoginScreen</Heading>
    </Container>
  </Layout>
);

export default LoginScreen;
