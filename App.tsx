import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

// Files
import {NavigationRef} from './src/utils/routerServices';
import {LightTheme, DarkTheme} from './src/theme';
import MainStack from './src/router/MainStack';
import {persistor, store} from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import fonts from './src/constants/fonts';
import {getScreenHeight} from './src/utils/commonServices';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    // <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          theme={colorScheme === 'light' ? LightTheme : DarkTheme}
          ref={NavigationRef}>
          <FlashMessage titleStyle={styles.title} position="top" />
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    // </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.medium,
    fontSize: getScreenHeight(1.8),
    color: LightTheme.colors.background,
  },
});

export default App;
