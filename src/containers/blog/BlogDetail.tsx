import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../../theme';
import localization from '../../localization';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';

const BlogDetail = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <Text style={styles.title}>{'Blog Detail'} </Text>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: Colors) => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: getScreenHeight(2),
    },
    safe: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontFamily: fonts.medium,
      fontSize: getScreenHeight(2),
      color: theme.textColor,
    },
  });
};

export default BlogDetail;
