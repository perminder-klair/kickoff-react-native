import React, { PropsWithChildren } from 'react';
import { capitalize } from 'lodash';
import { FieldError } from 'react-hook-form';

import {
  // FormControlError,
  Box,
  FormControl,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  VStack,
} from '@gluestack-ui/themed';

const defaultProps = {
  helperMsg: '',
  isRequired: false,
};

type Props = {
  label: string;
  type?: 'list' | 'grid';
  helperMsg?: string;
  isInvalid: FieldError | undefined;
  isRequired?: boolean;
} & PropsWithChildren &
  typeof defaultProps;

const MyFormControl = ({
  label,
  children,
  helperMsg,
  isInvalid,
  ...props
}: Props) => {
  console.log('isInvalid', isInvalid);
  return (
    <FormControl {...props}>
      <VStack>
        <FormControlLabel>
          <FormControlLabelText>{label} </FormControlLabelText>
        </FormControlLabel>
        {children}
        {isInvalid ? (
          <Box height={18}>
            <FormControlErrorText
              color="$red400"
              size="xs"
              marginTop={-1}
              lineHeight="$xs"
            >
              {capitalize(isInvalid.message)}
            </FormControlErrorText>
          </Box>
        ) : (
          <FormControlHelper>
            <FormControlHelperText>{helperMsg}</FormControlHelperText>
          </FormControlHelper>
        )}
      </VStack>
    </FormControl>
  );
};

MyFormControl.defaultProps = defaultProps;

export default MyFormControl;
