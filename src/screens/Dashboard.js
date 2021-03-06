import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../components/elements';
import Layout from '../components/Layout';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => (
  <Layout>
    <Container>
      <Text>This is Dashboard page</Text>
    </Container>
  </Layout>
);

export default Dashboard;
