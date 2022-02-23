import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
// import { Platform } from 'react-native';

import Text from './Text';
import Label from './Label';

const Container = styled.View`
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 4px;
  border-color: ${(props) => props.theme.borderColor};
  border-width: 1.5px;
  padding-vertical: 12px;
  padding-horizontal: 18px;
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => `${props.theme.fontSize}px}`};
`;

const ErrorText = styled(Text)`
  margin-top: 3px;
  font-size: 11px;
  color: #e60533;
`;

const TextInput = ({ label, error, isLoading, width, ...props }) => (
  <Container width={width}>
    {label && <Label>{label}</Label>}
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
