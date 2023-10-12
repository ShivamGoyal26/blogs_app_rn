import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../theme';

const FullScreenLoader = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <ActivityIndicator size={'small'} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    screen: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default FullScreenLoader;
