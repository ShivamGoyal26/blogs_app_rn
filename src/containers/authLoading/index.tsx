import React, {useCallback, useEffect} from 'react';

// Files
import {resetRoot} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {useSelector} from 'react-redux';
import {FullScreenLoader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthLoading = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const checkUserStatus = useCallback(async () => {
    await AsyncStorage.getItem('persist:root');
    if (isLoggedIn) {
      resetRoot(routes.DRAWER_STACK);
    } else {
      resetRoot(routes.AUTH_STACK);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);

  return <FullScreenLoader />;
};

export default AuthLoading;
