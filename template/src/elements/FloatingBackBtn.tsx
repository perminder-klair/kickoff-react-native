import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Box, Center, ChevronLeftIcon, Pressable } from '@gluestack-ui/themed';

const FloatingBackBtn = () => {
  const navigation = useNavigation();

  return (
    <Center position="absolute" top={10} left={5} zIndex={99999}>
      <Pressable onPress={navigation.goBack}>
        <Box
          backgroundColor="#9ca3af"
          opacity={0.7}
          borderRadius={20}
          padding={2}
        >
          <ChevronLeftIcon size="sm" color="#000000" />
        </Box>
      </Pressable>
    </Center>
  );
};

export default FloatingBackBtn;
