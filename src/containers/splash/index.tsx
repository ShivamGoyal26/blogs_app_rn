import React, {useCallback, useEffect} from 'react';

// Files
import {NavigationRef, resetRoot} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {useSelector} from 'react-redux';
import {FullScreenLoader} from '../../components';

const Splash = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  const checkUserStatus = useCallback(() => {
    console.log(NavigationRef.current.isReady());
    if (NavigationRef.current.isReady()) {
      if (isLoggedIn) {
        resetRoot(routes.DRAWER_STACK);
      } else {
        resetRoot(routes.LOGIN);
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkUserStatus();
    console.log('sjk');
  }, [checkUserStatus]);

  return <FullScreenLoader />;
};

export default Splash;
