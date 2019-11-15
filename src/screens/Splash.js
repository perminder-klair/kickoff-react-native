import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #a22f83;
`;

const Slogan = styled(Text)`
  color: #ffffff;
`;

class SplashScreen extends React.Component {
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (this.props.navigation && data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 1000),
    );

  render() {
    return (
      <Container>
        <Slogan>Loading...</Slogan>
      </Container>
    );
  }
}

export default SplashScreen;
