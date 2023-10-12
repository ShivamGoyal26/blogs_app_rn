import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

// Files
import {Colors} from '../theme';
import {
  CustomDivider,
  CustomDrawerItem,
  CustomDropDown,
  CustomSpacer,
  NotFound,
  ProfileItem,
} from '../components';
import localization from '../localization';
import fonts from '../constants/fonts';
import {getScreenHeight} from '../utils/commonServices';
import dashboardRoutes from '../constants/dashboardRoutes';
import blogRoutes from '../constants/blogRoutes';
import images from '../constants/images';
import {useDispatch} from 'react-redux';
import {signOutThunk} from '../redux/auth';

const DrawerContent = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [selected, setSelected] = useState('Dashboard#1');

  const onDrawerItemPress = (item: any) => {
    setSelected(item.id);
    if (item.route) {
      return navigation.navigate(item.route);
    }
    Alert.alert('Working');
  };

  return (
    <View style={styles.screen}>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawercontanier}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <CustomSpacer />
        <ProfileItem />
        <CustomSpacer height={getScreenHeight(4)} />

        <View style={styles.content}>
          {/* DASHBOARD */}

          <Text style={styles.title}>{localization.dashboards}</Text>
          <CustomSpacer height={getScreenHeight(1)} />
          {dashboardRoutes.map(item => {
            return (
              <CustomDrawerItem
                selected={selected}
                action={() => onDrawerItemPress(item)}
                key={item.id}
                icon={item.icon}
                title={item.title}
                id={item.id}
              />
            );
          })}

          {/* BLOGS  */}
          <CustomSpacer height={getScreenHeight(4)} />

          <Text style={styles.title}>{localization.blogs}</Text>
          <CustomSpacer height={getScreenHeight(1)} />
          {blogRoutes.map(item => {
            return (
              <CustomDrawerItem
                selected={selected}
                action={() => onDrawerItemPress(item)}
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
              />
            );
          })}

          {/* DOCUMENTATION */}

          <CustomSpacer height={getScreenHeight(4)} />

          <CustomDropDown title={localization.documentation}>
            <CustomSpacer height={getScreenHeight(1)} />
            <NotFound />
          </CustomDropDown>

          <CustomSpacer />
          <CustomDivider />
          <CustomSpacer />

          <CustomDropDown title={localization.reports}>
            <CustomSpacer height={getScreenHeight(1)} />
            <NotFound />
          </CustomDropDown>

          <CustomSpacer />
          <CustomDivider />
          <CustomSpacer />

          <CustomDropDown title={localization.needHelp}>
            <CustomSpacer height={getScreenHeight(1)} />
            <NotFound />
          </CustomDropDown>

          <CustomSpacer height={getScreenHeight(4)} />
          <CustomDrawerItem
            action={() => dispatch<any>(signOutThunk())}
            icon={images.logout}
            id={'logout'}
            title={localization.logout}
          />
          <CustomSpacer />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    drawercontanier: {
      backgroundColor: theme.backgroundColor,
    },
    screen: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      color: theme.textColor,
      fontFamily: fonts.semibold,
      fontSize: getScreenHeight(1.8),
    },
    content: {
      paddingHorizontal: getScreenHeight(2),
    },
  });

export default DrawerContent;
