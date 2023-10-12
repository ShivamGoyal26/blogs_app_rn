import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files
import routes from '../constants/routes';
import Login from '../containers/auth/Login';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.DRAWER_STACK} component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
