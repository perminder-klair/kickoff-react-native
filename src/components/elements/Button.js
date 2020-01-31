import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme, { boxShadow } from '../../utils/theme';
import ButtonPressAnimation from './ButtonPressAnimation';
import Text from './Text';

const Container = styled(ButtonPressAnimation)`
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
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
`;

const TextStyled = styled(Text)`
  color: ${props => props.theme.lightShades};
  font-size: ${props => props.fontSize};
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
  small,
  ...other
}) => {
  let bgColor = theme.primaryColor;
  let { fontSize } = theme;
  let paddingTop = Platform.OS === 'ios' ? 10 : 10;
  let paddingBottom = Platform.OS === 'ios' ? 12 : 10;
  if (secondary) {
    bgColor = theme.darkShades;
  } else if (secondayAlt) {
    bgColor = '#2e2435';
  }

  if (small) {
    fontSize = 13;
    paddingTop = 5;
    paddingBottom = 5;
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
      <ContainerInner
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        {...other}
      >
        {title ? (
          <TextStyled fontSize={fontSize} bold>
            {title}
          </TextStyled>
        ) : (
          children
        )}
      </ContainerInner>
    </Container>
  );
};

export default MyButton;
