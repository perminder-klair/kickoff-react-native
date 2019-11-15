import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Text from './Text';

export const boxShadow = Platform.select({
  ios: {
    shadowColor: '#000',
    /* shadowOffset: { width: 1, height: 2 }, */
    /* shadowOpacity: 0.25, */
    shadowRadius: 1,
  },
  android: {
    elevation: 1,
  },
});

const Container = styled.View`
  width: ${props => (props.width ? props.width : '100%')};
`;

const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 4;
  border-color: ${props => props.theme.borderColor};
  border-width: 2;
  padding-vertical: 12;
  padding-horizontal: 18;
  color: ${props => props.theme.textColor};
  font-size: ${props => props.theme.fontSize};
`;

const ErrorText = styled(Text)`
  margin-left: 15;
  margin-right: 15;
  font-size: 11;
  color: #e60533;
`;

const TextInput = ({ error, isLoading, width, ...props }) => (
  <Container style={boxShadow} width={width}>
    <Input
      underlineColorAndroid="transparent"
      placeholderTextColor={'#9EA1A7'}
      editable={!isLoading}
      {...props}
    />
    {error && <ErrorText>{error}</ErrorText>}
  </Container>
);

TextInput.defaultProps = {
  isLoading: false,
};

TextInput.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default TextInput;
