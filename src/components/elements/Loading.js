import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styled from 'styled-components/native';
import { BarIndicator } from 'react-native-indicators';

import theme from '../../utils/theme';

const Container = styled.View`
  position: relative;
`;

const Loading = ({ visible = true }) => (
  <Container>
    <Spinner
      visible={visible}
      animation="fade"
      customIndicator={<BarIndicator color={theme.primaryColor} size={60} />}
    />
  </Container>
);

export default Loading;
