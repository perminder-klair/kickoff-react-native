import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Image from './Image';
import dummyAvatar from '../../assets/images/avatar.jpg';

const Container = styled.View`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  overflow: hidden;
  background-color: grey;
  border-radius: ${(props) => props.size / 2};
  align-items: center;
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.theme.borderColor};
`;

const Avatar = ({ size, source, borderWidth }) => (
  <Container size={size} borderWidth={borderWidth}>
    <Image source={source} width={size * 1.5} height={size * 1.5} />
  </Container>
);

Avatar.defaultProps = {
  size: 86,
  source: dummyAvatar,
  borderWidth: 5,
};

Avatar.propTypes = {
  size: PropTypes.number,
  source: PropTypes.any,
  borderWidth: PropTypes.number,
};

export default Avatar;
