import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Files
import {NavigationRef} from './src/utils/routerServices';
import {LightTheme, DarkTheme} from './src/theme';
import MainStack from './src/router/MainStack';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'light' ? LightTheme : DarkTheme}
        ref={NavigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
