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
  action?: any;
  selected?: string;
  id?: string;
};

const CustomDrawerItem = ({
  title,
  icon,
  action,
  id,
  selected,
}: CustomDrawerItemProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.item,
        {backgroundColor: selected === id ? colors.primary : colors.background},
      ]}>
      <FastImage
        tintColor={selected === id ? colors.textColor : theme.colors.grey}
        resizeMode="contain"
        style={styles.icon}
        source={icon}
      />
      <Text
        style={[
          styles.title,
          {
            color: selected === id ? colors.textColor : colors.grey,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    item: {
      height: getScreenHeight(6),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: getScreenHeight(1),
      borderRadius: getScreenHeight(1),
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
