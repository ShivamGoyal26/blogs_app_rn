import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files
import routes from '../constants/routes';
import Login from '../containers/auth/Login';
import DrawerStack from './DrawerStack';
import CustomLoadingModal from '../components/CustomLoadingModal';
import {spinnerRef} from '../utils/SpinnerRef';
import BlogDetail from '../containers/blog/BlogDetail';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <CustomLoadingModal ref={spinnerRef} />
      <Stack.Navigator
        initialRouteName={routes.SPLASH}
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={routes.SPLASH} component={Splash} /> */}
        <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            animation: 'slide_from_bottom',
          }}
          name={routes.DRAWER_STACK}
          component={DrawerStack}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
