import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
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

const DrawerContent = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  const onDrawerItemPress = (item: any) => {
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
          {dashboardRoutes.map((item, key) => {
            return (
              <CustomDrawerItem
                action={() => onDrawerItemPress(item)}
                key={key}
                icon={item.icon}
                title={item.title}
              />
            );
          })}

          {/* BLOGS  */}
          <CustomSpacer height={getScreenHeight(4)} />

          <Text style={styles.title}>{localization.blogs}</Text>
          {blogRoutes.map((item, key) => {
            return (
              <CustomDrawerItem
                action={() => onDrawerItemPress(item)}
                key={key}
                icon={item.icon}
                title={item.title}
              />
            );
          })}

          {/* DOCUMENTATION */}

          <CustomSpacer height={getScreenHeight(4)} />

          <CustomDropDown title={localization.documentation}>
            <NotFound />
          </CustomDropDown>

          <CustomSpacer />
          <CustomDivider />
          <CustomSpacer />

          <CustomDropDown title={localization.reports}>
            <NotFound />
          </CustomDropDown>

          <CustomSpacer />
          <CustomDivider />
          <CustomSpacer />

          <CustomDropDown title={localization.needHelp}>
            <NotFound />
          </CustomDropDown>

          <CustomSpacer height={getScreenHeight(4)} />
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
