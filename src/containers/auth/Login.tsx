import {useTheme} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Lottie from 'lottie-react-native';

// Files
import {Colors} from '../../theme';
import localization from '../../localization';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomButton, CustomSpacer} from '../../components';
import {getUserThunk} from '../../redux/auth';
import lotties from '../../constants/lotties';

const Login = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.background);
      StatusBar.setBarStyle('dark-content');
    }
  }, []);

  const onGetStartedPress = () => {
    dispatch<any>(getUserThunk());
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <CustomSpacer />

        <Text style={styles.title}>{localization.welcome} </Text>
        <Text style={styles.subtitle}>{localization.loginAsGuest} </Text>
        <CustomSpacer height={getScreenHeight(10)} />

        <Lottie style={styles.icon} source={lotties.welcome} autoPlay loop />
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
    icon: {
      height: getScreenHeight(25),
      width: '100%',
    },
  });
};

export default Login;
