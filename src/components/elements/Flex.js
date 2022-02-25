import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Column = styled.View`
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const Container = ({ children }) => <Column>{children}</Column>;

Container.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

Container.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};
export default Container;
