import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files
import routes from '../constants/routes';
import Login from '../containers/auth/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
