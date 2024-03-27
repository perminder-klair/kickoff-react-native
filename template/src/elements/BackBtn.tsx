import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Box, ChevronLeftIcon, Icon, Pressable } from '@gluestack-ui/themed';

const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={navigation.goBack}>
      <Box opacity={0.7} borderRadius={20} padding={2}>
        <Icon as={ChevronLeftIcon} m="$2" w="$4" h="$4" />
      </Box>
    </Pressable>
  );
};

export default BackBtn;
