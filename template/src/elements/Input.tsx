import React from 'react';

import { Input, InputField } from '@gluestack-ui/themed';

type Props = React.ComponentProps<typeof InputField>;

const MyInput = ({ ...props }: Props) => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here" {...props} />
    </Input>
  );
};

export default MyInput;
