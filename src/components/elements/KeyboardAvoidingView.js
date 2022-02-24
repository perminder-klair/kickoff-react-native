import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const KeyboardAvoiding = ({ children }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1 }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
export default KeyboardAvoiding;
