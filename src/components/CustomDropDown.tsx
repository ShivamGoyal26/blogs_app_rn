import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Files
import {getScreenHeight} from '../utils/commonServices';
import {Colors} from '../theme';
import fonts from '../constants/fonts';
import FastImage from 'react-native-fast-image';
import images from '../constants/images';

type CustomDropDownProps = {
  title: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const CustomDropDown = ({title, children, disabled}: CustomDropDownProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen(pre => !pre);
  }, []);

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        style={styles.row}
        onPress={toggle}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {open ? (
          <FastImage
            tintColor={colors.textColor}
            resizeMode="contain"
            style={styles.icon}
            source={images.arrowup}
          />
        ) : (
          <FastImage
            tintColor={colors.textColor}
            resizeMode="contain"
            style={styles.icon}
            source={images.arrowdown}
          />
        )}
      </TouchableOpacity>
      {open ? children : null}
    </>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: theme.textColor,
      fontFamily: fonts.semibold,
      fontSize: getScreenHeight(1.8),
      textTransform: 'uppercase',
    },
    icon: {
      height: getScreenHeight(2),
      width: getScreenHeight(2),
    },
  });

export default CustomDropDown;
