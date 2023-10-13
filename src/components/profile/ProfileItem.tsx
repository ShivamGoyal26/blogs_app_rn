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
import {useSelector} from 'react-redux';
import {fontSize} from '../../theme/text-variants';
import {navigate} from '../../utils/routerServices';
import routes from '../../constants/routes';

type ProfileItemProps = {
  resetSelectedStatus?: () => void;
  hide?: boolean;
  heading?: string;
  subHeading?: string;
};
const ProfileItem = ({
  resetSelectedStatus,
  hide,
  heading,
  subHeading,
}: ProfileItemProps) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const userData = useSelector((state: any) => state.auth.userData);

  const onClick = () => {
    if (resetSelectedStatus) {
      resetSelectedStatus();
    }
    navigate(routes.PROFILE_OVERVIEW, {});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: userData?.profileImage,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>
        {subHeading ? subHeading : localization.hello}
      </Text>
      <Text numberOfLines={1} style={styles.subtitle}>
        {heading ? heading : userData?.name}
      </Text>
      <CustomSpacer />

      {hide ? null : (
        <View style={styles.buttonContainer}>
          <CustomButton
            action={onClick}
            icon={images.metric}
            height={getScreenHeight(5)}
            title={localization.liveMetrics}
          />
        </View>
      )}
    </View>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    screen: {
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
      fontSize: fontSize.l,
    },
    subtitle: {
      fontFamily: fonts.medium,
      color: theme.textColor,
      fontSize: fontSize.xl,
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
