import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Column = styled.View`
  flex-direction: row;
`;

const Container = ({ children }) => <Column>{children}</Column>;

Container.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  primary: PropTypes.bool,
  light: PropTypes.bool,
  semiBold: PropTypes.bool,
  bold: PropTypes.bool,
  extraBold: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
};
export default Container;
