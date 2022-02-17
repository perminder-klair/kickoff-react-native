import React from 'react';
import PropTypes from 'prop-types';
import { Image as DefaultImage } from 'react-native';
import FastImage from 'react-native-fast-image';
import Image from 'react-native-scalable-image';
import { isObject } from 'lodash';

const MyImage = ({
  keepRatio,
  source,
  width,
  height,
  resizeMode,
  priority,
  ...props
}) => {
  if (!isObject(source)) {
    return <Image source={source} width={width} height={height} {...props} />;
  }

  if (source.isLocal) {
    return (
      <DefaultImage
        source={source.uri}
        style={{ width, height, resizeMode }}
        {...props}
      />
    );
  }

  return (
    <FastImage
      {...props}
      style={{ width, height }}
      source={{
        priority: FastImage.priority[priority],
        ...source,
      }}
      resizeMode={
        keepRatio
          ? FastImage.resizeMode.contain
          : FastImage.resizeMode[resizeMode]
      }
    />
  );
};

MyImage.defaultProps = {
  keepRatio: false,
  resizeMode: 'cover',
  priority: 'normal',
};

MyImage.propTypes = {
  keepRatio: PropTypes.bool,
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'center']),
  priority: PropTypes.oneOf(['low', 'normal', 'high']),
};

export default MyImage;
