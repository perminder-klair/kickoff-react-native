import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleProp } from 'react-native';

import { Box } from '@gluestack-ui/themed';

const defaultProps = {
  hasSafeArea: true,
};

type Props = {
  style?: StyleProp<any>;
  hasSafeArea?: boolean;
} & PropsWithChildren &
  typeof defaultProps;

const Layout = ({ style, children, hasSafeArea }: Props) => {
  const Wrapper = hasSafeArea ? SafeAreaView : Box;

  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Layout;
