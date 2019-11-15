import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import theme from '../../utils/theme';

const Container = styled(Text)`
  font-size: ${props => props.fontSize};
  color: ${props =>
    props.lite ? props.theme.textColorLite : props.theme.textColor};
  font-family: ${props => props.fontFamily};
`;

const MyText = props => {
  const {
    style,
    children,
    primary,
    light,
    semibold,
    bold,
    extrabold,
    size,
    ...other
  } = props;

  let { fontFamily, fontSize } = theme;

  if (light) {
    fontFamily = `${fontFamily}-Light`;
  } else if (bold) {
    fontFamily = `${fontFamily}-Bold`;
  } else {
    fontFamily = `${fontFamily}-Regular`;
  }

  if (size === 'medium') {
    fontSize = theme.fontSizeMedium;
  } else if (size === 'large') {
    fontSize = theme.fontSizeLarge;
  } else if (size === 'small') {
    fontSize = theme.fontSizeSmall;
  } else if (size === 'extraSmall') {
    fontSize = theme.fontSizeExtraSmall;
  } else if (size === 'little') {
    fontSize = theme.fontSizeLittle;
  } else if (size === 'extraLarge') {
    fontSize = theme.fontSizeExtraLarge;
  }

  if (!children) {
    return null;
  }

  return (
    <Container
      style={style}
      fontFamily={fontFamily}
      allowFontScaling={false}
      fontSize={fontSize}
      {...other}
    >
      {children}
    </Container>
  );
};

MyText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  primary: PropTypes.bool,
  light: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  extrabold: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
};

export default MyText;
