import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Text from './Text';

export const boxShadow = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  android: {
    elevation: 1,
  },
});

const Container = styled.View`
  width: 100%;
  margin-bottom: 15;
`;
const Item = styled.TouchableOpacity`
  margin-bottom: 10;
  background-color: ${props =>
    props.active ? props.theme.primaryColor : '#ffffff'};
  padding-vertical: 12;
  border-radius: 4;
  align-items: center;
`;
const ItemText = styled(Text)`
  color: ${props => (props.active ? '#ffffff' : props.theme.textColor)};
`;

const SelectInput = ({ options, onPress, value, ...otherProps }) => (
  <Container {...otherProps}>
    {options.map(item => {
      const isActive = item.key === value;

      return (
        <Item
          key={item.key}
          onPress={() => onPress(item.key)}
          style={boxShadow}
          active={isActive}
        >
          <ItemText active={isActive}>{item.value}</ItemText>
        </Item>
      );
    })}
  </Container>
);

export default SelectInput;
