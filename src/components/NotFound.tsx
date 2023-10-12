import React, {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Files
import {getScreenHeight} from '../utils/commonServices';
import {Colors} from '../theme';
import fonts from '../constants/fonts';
import localization from '../localization';

type NotFoundProps = {
  message?: string;
};

const NotFound = ({message}: NotFoundProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Text numberOfLines={1} style={styles.title}>
      {message ? message : localization.noDataFound}
    </Text>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    title: {
      color: theme.textColor,
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(1.5),
    },
  });

export default NotFound;
