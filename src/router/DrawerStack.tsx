import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Files
import Blogs from '../containers/blog/Blogs';
import routes from '../constants/routes';
import ProfileOverview from '../containers/profile/ProfileOverview';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName={routes.BLOGS}
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'back',
        headerShown: false,
        drawerStyle: {width: '70%'},
      }}>
      <Drawer.Screen name={routes.BLOGS} component={Blogs} />
      <Drawer.Screen
        name={routes.PROFILE_OVERVIEW}
        component={ProfileOverview}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
