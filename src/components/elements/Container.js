import React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

const Wrapper = styled(Text)`
  padding-horizontal: 15px;
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
