import React, { PropsWithChildren } from 'react';
import { capitalize } from 'lodash';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormControlError,
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
  return (
    <FormControl {...props}>
      <VStack>
        <FormControlLabel>
          <FormControlLabelText>{label} </FormControlLabelText>
        </FormControlLabel>
        {children}
        {isInvalid ? (
          <FormControlError>
            <FormControlErrorText color="red.600" size="xs" marginTop={-1}>
              {capitalize(isInvalid.message)}
            </FormControlErrorText>
          </FormControlError>
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
