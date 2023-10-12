import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

// Files
import {Colors} from '../theme';
import {getScreenHeight} from '../utils/commonServices';
import fonts from '../constants/fonts';

type CustomDrawerItemProps = {
  title: string;
  icon?: any;
  action?: () => void;
};

const CustomDrawerItem = ({title, icon, action}: CustomDrawerItemProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <TouchableOpacity onPress={action} style={styles.item}>
      <FastImage
        tintColor={theme.colors.grey}
        resizeMode="contain"
        style={styles.icon}
        source={icon}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    item: {
      height: getScreenHeight(6),
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(1.7),
      color: theme.grey,
    },
    icon: {
      height: getScreenHeight(2.5),
      width: getScreenHeight(2.5),
      marginRight: getScreenHeight(1),
    },
  });

export default CustomDrawerItem;
