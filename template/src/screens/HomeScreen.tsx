import React from 'react';
import { Alert, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { Box, Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';

import Layout from '@components/Layout';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <Layout hasSafeArea={true}>
      <VStack gap={16} height="100%">
        <Carousel
          loop
          width={width}
          height={height / 2}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index: number) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <Box
              display="flex"
              borderWidth={1}
              justifyContent="center"
              height={height / 2}
              bgColor="$red400"
            >
              <Text textAlign="center" fontSize="$2xl">
                {index}
              </Text>
            </Box>
          )}
        />
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => {
            Alert.alert('Button clicked!');
          }}
          mx={4}
        >
          <ButtonText>Hello World!</ButtonText>
        </Button>
      </VStack>
    </Layout>
  );
}
