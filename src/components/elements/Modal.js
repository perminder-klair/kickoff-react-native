import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  AppState,
  BackHandler,
  ScrollView,
  Text,
} from 'react-native';

import theme from '../../utils/theme';

const styles = StyleSheet.create({
  modal: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  modalLite: {
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 15,
    marginRight: 15,
  },
});

const borderRadius = 8;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  border-top-right-radius: ${props => (!props.hasHeader ? borderRadius : 0)};
  border-top-left-radius: ${props => (!props.hasHeader ? borderRadius : 0)};
  border-bottom-right-radius: ${props => (props.lite ? borderRadius : 0)};
  border-bottom-left-radius: ${props => (props.lite ? borderRadius : 0)};
  padding-bottom: 60;
`;

const Top = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props =>
    !props.lite ? (Platform.OS === 'ios' ? 50 : 10) : 15};
  padding-bottom: 15;
  padding-left: 15;
  border-top-right-radius: ${props => (props.lite ? borderRadius : 0)};
  border-top-left-radius: ${props => (props.lite ? borderRadius : 0)};
`;

const Title = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled(Text)`
  margin-left: -10;
  font-size: ${props => props.theme.fontSizeMedium};
`;

class MyModal extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.onRequestClose();
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    const { disableAutoHide } = this.props;

    // bug fixed, close modal when app goes to backgroind
    if (nextAppState === 'background' && !disableAutoHide) {
      this.props.onRequestClose();
    }
  };

  render() {
    const {
      onRequestClose,
      children,
      isVisible,
      title,
      hasHeader,
      lite,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        onBackButtonPress={onRequestClose}
        onBackdropPress={onRequestClose}
        style={!lite ? styles.modal : styles.modalLite}
      >
        {hasHeader && (
          <Top lite={lite}>
            <TouchableOpacity onPress={onRequestClose}>
              <MaterialIcons name="clear" size={24} color={theme.textColor} />
            </TouchableOpacity>
            <Title>
              <TitleText semibold>{title}</TitleText>
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
  }
}

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
