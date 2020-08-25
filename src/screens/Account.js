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

const Account = () => {
  const setIsLoggedIn = useStoreActions(
    (actions) => actions.user.setIsLoggedIn,
  );

  return (
    <Layout>
      <Container>
        <Text>This is Account page</Text>
        <Button title="Logout" onPress={() => setIsLoggedIn(false)} />
      </Container>
    </Layout>
  );
};

export default Account;
