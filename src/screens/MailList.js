import React from 'react';
import styled from 'styled-components/native';

import Layout from '../components/Layout';
import { Text } from '../components/elements';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Text)``;

const MailListScreen = () => (
  <Layout>
    <Container>
      <Heading>MailListScreen</Heading>
    </Container>
  </Layout>
);

export default MailListScreen;
