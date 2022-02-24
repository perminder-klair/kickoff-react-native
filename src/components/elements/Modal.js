import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Platform,
  TouchableOpacity,
  AppState,
  BackHandler,
  ScrollView,
  Modal,
} from 'react-native';

import Text from './Text';

const borderRadius = 8;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  border-top-right-radius: ${(props) => (!props.hasHeader ? borderRadius : 0)};
  border-top-left-radius: ${(props) => (!props.hasHeader ? borderRadius : 0)};
  border-bottom-right-radius: ${(props) => (props.lite ? borderRadius : 0)};
  border-bottom-left-radius: ${(props) => (props.lite ? borderRadius : 0)};
  padding-bottom: 60;
`;

const Top = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-top: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    !props.lite ? (Platform.OS === 'ios' ? 50 : 10) : 15};
  padding-bottom: 15;
  padding-left: 15;
  border-top-right-radius: ${(props) => (props.lite ? borderRadius : 0)};
  border-top-left-radius: ${(props) => (props.lite ? borderRadius : 0)};
`;

const Title = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled(Text)`
  margin-left: -10;
  font-size: ${(props) => props.theme.fontSizeMedium};
`;

const MyModal = ({
  onRequestClose,
  children,
  isVisible,
  title,
  hasHeader,
  lite,
  disableAutoHide,
}) => {
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      // bug fixed, close modal when app goes to background
      if (nextAppState === 'background' && !disableAutoHide) {
        onRequestClose();
      }
    };

    AppState.addEventListener('change', handleAppStateChange);

    BackHandler.addEventListener('hardwareBackPress', () => {
      onRequestClose();
    });

    return function cleanup() {
      AppState.remove('change', handleAppStateChange);
    };
  }, []);

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}
    >
      {hasHeader && (
        <Top lite={lite}>
          <TouchableOpacity onPress={onRequestClose}>
            <Text>X</Text>
          </TouchableOpacity>
          <Title>
            <TitleText semiBold>{title}</TitleText>
          </Title>
        </Top>
      )}
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          backgroundColor: '#fff',
          borderBottomRightRadius: lite ? borderRadius : 0,
          borderBottomLeftRadius: lite ? borderRadius : 0,
        }}
      >
        <Container lite={lite} hasHeader={hasHeader}>
          {children}
        </Container>
      </ScrollView>
    </Modal>
  );
};

MyModal.defaultProps = {
  title: '',
  hasHeader: true,
  onRequestClose: () => {},
};

MyModal.propTypes = {
  title: PropTypes.string,
  hasHeader: PropTypes.bool,
  isVisible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyModal;
