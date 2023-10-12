import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../../theme';
import localization from '../../localization';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';
import {resetRoot} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {CustomButton, CustomSpacer} from '../../components';

const Login = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  const onGetStartedPress = () => {
    resetRoot(routes.DRAWER_STACK);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <Text style={styles.title}>{localization.welcome} </Text>
        <Text style={styles.subtitle}>{localization.loginAsGuest} </Text>
        <CustomSpacer height={getScreenHeight(10)} />
        <CustomButton
          action={onGetStartedPress}
          title={localization.getStarted}
        />
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
    subtitle: {
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(2),
      color: theme.grey,
    },
  });
};

export default Login;
