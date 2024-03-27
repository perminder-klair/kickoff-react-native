import React from 'react';

import {
  Alert,
  Box,
  Button,
  ButtonText,
  Center,
  InfoIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: string;
  buttonText?: string;
  onPress?: () => void;
}

const EmptyState = ({ ...props }: EmptyStateProps) => {
  return (
    <Center>
      <VStack w="100%">
        <Alert w="100%" backgroundColor="gray.200">
          <VStack
            flexShrink={1}
            w="100%"
            alignItems="center"
            paddingTop={6}
            paddingBottom={6}
          >
            {props.icon || <InfoIcon size="md" />}
            <Text fontSize="$md" fontWeight="medium">
              {props.title}
            </Text>
            <Box>{props.description}</Box>
            {props.buttonText && (
              <Button
                size="lg"
                paddingLeft={12}
                paddingRight={12}
                marginTop={4}
                onPress={props.onPress}
              >
                <ButtonText color="#ffffff" size="sm">
                  {props.buttonText}
                </ButtonText>
              </Button>
            )}
          </VStack>
        </Alert>
      </VStack>
    </Center>
  );
};

export default EmptyState;
