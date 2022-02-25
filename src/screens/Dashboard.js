import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

import { Text } from '../components/elements';
import Layout from '../components/Layout';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  const test = 'ddd';
  useEffect(() => {
    if (test) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'This is an dashboard message',
        button: 'Ok',
      });
    }
  }, []);

  return (
    <Layout>
      <Container>
        <Text>This is Dashboard page</Text>
      </Container>
    </Layout>
  );
};

export default Dashboard;
