import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../theme';

const DrawerContent = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View>
      <DrawerContentScrollView
        contentContainerStyle={styles.drawercontanier}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}></DrawerContentScrollView>
    </View>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    drawercontanier: {
      backgroundColor: theme.backgroundColor,
    },
  });

export default DrawerContent;
