import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme, { boxShadow } from '../../utils/theme';
import Text from './Text';

const Container = styled.TouchableOpacity`
  background-color: ${props => props.bgColor};
  border-radius: 4;
  margin-horizontal: 13;
  border-width: 0;
  opacity: ${props => (props.isLoading || props.disabled ? 0.75 : 1)};
  width: 100%;
`;

const ContainerInner = styled.View`
  align-content: center;
  align-items: center;
  padding-top: ${Platform.OS === 'ios' ? 10 : 10};
  padding-bottom: ${Platform.OS === 'ios' ? 12 : 10};
`;

const TextStyled = styled(Text)`
  color: ${props => props.theme.lightShades};
  font-size: ${props => props.theme.fontSize};
`;

const MyButton = ({
  children,
  style,
  onPress,
  disabled,
  isLoading,
  noAnimation,
  primary,
  secondary,
  secondayAlt,
  title,
  ...other
}) => {
  let bgColor = theme.primaryColor;
  if (secondary) {
    bgColor = theme.darkAccent;
  } else if (secondayAlt) {
    bgColor = theme.lightAccent;
  }

  return (
    <Container
      style={[style, boxShadow]}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      noAnimation={noAnimation}
      bgColor={bgColor}
      onPress={onPress}
    >
      <ContainerInner {...other}>
        {title ? <TextStyled bold>{title}</TextStyled> : children}
      </ContainerInner>
    </Container>
  );
};

export default MyButton;
