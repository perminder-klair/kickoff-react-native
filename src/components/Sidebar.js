import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export default CustomDrawerContentComponent;
