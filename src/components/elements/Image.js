import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-native-scalable-image';

const MyImage = ({ keepRatio, source, width, height, ...props }) => (
  <Image source={source} width={width} height={height} {...props} />
);

MyImage.defaultProps = {
  keepRatio: false,
};

MyImage.propTypes = {
  keepRatio: PropTypes.bool,
};

export default MyImage;
