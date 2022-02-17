import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
// import { Image } from '../components/elements';

import { timeout } from '../utils/helpers';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

// const LogoImage = styled(Image)`
//   align-self: center;
// `;

const Slogan = styled(Text)`
  color: #ffffff;
`;

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const init = async () => {
      const data = await timeout(1000);

      if (navigation && data !== null) {
        navigation.replace('App');
      }
    };

    init();
  }, []);
  return (
    <Container>
      {/* <LogoImage source={logoImg} width={200} /> */}
      <Slogan>Loading...</Slogan>
    </Container>
  );
};

export default SplashScreen;
