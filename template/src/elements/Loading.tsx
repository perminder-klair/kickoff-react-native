import React from 'react';

import { Box, Spinner } from '@gluestack-ui/themed';

const Loading = () => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Spinner />
    </Box>
  );
};

export default Loading;
