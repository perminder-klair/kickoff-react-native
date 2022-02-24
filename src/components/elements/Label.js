import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

const Container = styled(Text)`
  margin-bottom: 5px;
`;

const Label = ({ children }) => <Container>{children}</Container>;

export default Label;
