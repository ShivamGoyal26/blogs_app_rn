import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

// Files
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import localization from '../../localization';
import fonts from '../../constants/fonts';
import CustomSpacer from '../CustomSpacer';
import CustomButton from '../CustomButton';
import images from '../../constants/images';

const ProfileItem = () => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <FastImage source={images.profile} style={styles.image} />
      </View>
      <Text style={styles.title}>{localization.hello}</Text>
      <Text style={styles.subtitle}>{'Alice Simon'}</Text>
      <CustomSpacer />

      <View style={styles.buttonContainer}>
        <CustomButton
          icon={images.metric}
          height={getScreenHeight(5)}
          title={localization.liveMetrics}
        />
      </View>
    </View>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    imageContainer: {
      height: getScreenHeight(12),
      width: getScreenHeight(12),
      borderRadius: getScreenHeight(12),
      overflow: 'hidden',
      borderColor: theme.grey,
      borderWidth: getScreenHeight(0.1),
    },
    title: {
      fontFamily: fonts.regular,
      color: theme.grey,
      marginTop: getScreenHeight(1),
      fontSize: getScreenHeight(1.8),
    },
    subtitle: {
      fontFamily: fonts.medium,
      color: theme.textColor,
      fontSize: getScreenHeight(1.8),
    },
    divider: {
      width: '100%',
      height: getScreenHeight(0.1),
      backgroundColor: theme.grey,
    },
    buttonContainer: {
      width: '90%',
    },
  });

export default ProfileItem;