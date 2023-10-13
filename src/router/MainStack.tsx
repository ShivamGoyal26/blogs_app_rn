import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Files
import routes from '../constants/routes';
import DrawerStack from './DrawerStack';
import CustomLoadingModal from '../components/CustomLoadingModal';
import {spinnerRef} from '../utils/SpinnerRef';
import AuthStack from './AuthStack';
import AuthLoading from '../containers/authLoading';
import BlogDetail from '../containers/blog/BlogDetail';
import EditBlog from '../containers/blog/EditBlog';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <CustomLoadingModal ref={spinnerRef} />
      <Stack.Navigator
        initialRouteName={routes.AUTH_LOADING}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.AUTH_LOADING} component={AuthLoading} />
        <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />

        <Stack.Screen
          options={{
            presentation: 'card',
            animation: 'slide_from_bottom',
          }}
          name={routes.DRAWER_STACK}
          component={DrawerStack}
        />

        <Stack.Screen
          options={{
            presentation: 'card',
            animation: 'fade_from_bottom',
          }}
          name={routes.BLOG_DETAIL}
          component={BlogDetail}
        />

        <Stack.Screen
          options={{
            presentation: 'card',
            animation: 'fade_from_bottom',
          }}
          name={routes.EDIT_BLOG}
          component={EditBlog}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
