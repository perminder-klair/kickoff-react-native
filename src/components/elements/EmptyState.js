import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import theme from '../../utils/theme';
import Text from './Text';
import Icon from './Icon';

const Container = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Text)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 26px;
  padding-horizontal: 30px;
  text-align: center;
`;
const Details = styled(Text)`
  color: ${(props) => props.theme.textColorLite};
  text-align: center;
  padding-horizontal: 30px;
`;

const EmptyState = ({ icon, title, details }) => (
  <Container>
    <Icon name={icon} size={54} color={theme.textColor} />
    <Title bold>{title}</Title>
    <Details>{details}</Details>
  </Container>
);

EmptyState.defaultProps = {
  icon: 'warning',
  title: 'No data available',
  details: '',
};

EmptyState.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  details: PropTypes.string,
};

export default EmptyState;
