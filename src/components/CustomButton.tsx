import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Files
import {getScreenHeight} from '../utils/commonServices';
import {Colors} from '../theme';
import fonts from '../constants/fonts';

type CustomButtonProps = {
  title: string;
  disabled?: boolean;
  action?: () => void;
};

const CustomButton = ({title, disabled, action}: CustomButtonProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={action}
      activeOpacity={0.7}
      style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    screen: {
      height: getScreenHeight(6),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.primary,
      borderRadius: getScreenHeight(1),
    },
    title: {
      color: theme.textColor,
      fontFamily: fonts.medium,
      fontSize: getScreenHeight(1.8),
    },
  });

export default CustomButton;
