import React from 'react';
// import { Platform } from 'react-native';
import styled from 'styled-components/native';

import theme, { boxShadow } from '../../utils/theme';
import Text from './Text';

const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  border-width: 0;
  opacity: ${(props) => (props.isLoading || props.disabled ? 0.75 : 1)};
  width: 100%;
  padding-vertical: ${(props) => (props.isSmall ? '5px' : '10px')};
  padding-horizontal: ${(props) => (props.isSmall ? '5px' : '10px')};
`;

const TextStyled = styled(Text)`
  text-align: center;
  color: ${(props) => props.theme.lightShades};
`;

const MyButton = ({
  children,
  style,
  onPress,
  disabled,
  isLoading,
  secondary,
  title,
  small,
}) => {
  let bgColor = theme.primaryColor;
  if (secondary) {
    bgColor = theme.darkShades;
  }
  const fontSize = small ? theme.fontSizeExtraSmall : theme.fontSize;

  return (
    <Container
      style={[style, boxShadow]}
      disabled={disabled || isLoading}
      isLoading={isLoading}
      bgColor={bgColor}
      onPress={onPress}
      isSmall={small}
    >
      {title ? (
        <TextStyled bold fontSize={fontSize}>
          {isLoading ? 'Loading...' : title}
        </TextStyled>
      ) : (
        children
      )}
    </Container>
  );
};

export default MyButton;
