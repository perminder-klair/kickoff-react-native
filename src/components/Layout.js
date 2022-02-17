import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Layout = (props) => {
  const { hasTopNav, children } = props;

  return (
    <Container>
      <StatusBar style="auto" />
      {children}
    </Container>
  );
};

Layout.defaultProps = {
  hasTopNav: false,
};

Layout.propTypes = {
  hasTopNav: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
