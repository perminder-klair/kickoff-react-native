import React, { PropsWithChildren, useEffect } from 'react';
import { BackHandler } from 'react-native';

import { Modal } from '@gluestack-ui/themed';

const defaultProps = {};

type MyModalProps = {
  title: React.ReactNode | string;
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
  footer?: React.ReactNode;
} & PropsWithChildren &
  typeof defaultProps;

const MyModal = ({
  title,
  children,
  modalVisible,
  footer,
  setModalVisible,
}: MyModalProps) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setModalVisible(false);
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('modalVisible', modalVisible);

  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal.Content>
    </Modal>
  );
};

MyModal.defaultProps = defaultProps;

export default MyModal;
