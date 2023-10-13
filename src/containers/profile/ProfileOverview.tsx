import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

// Files
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomHeader, ProfileItem} from '../../components';
import images from '../../constants/images';
import fonts from '../../constants/fonts';
import {fontSize} from '../../theme/text-variants';

const ProfileOverView = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const userData = useSelector((state: any) => state.auth.userData);

  console.log(userData);
  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          title={userData.name}
          leftIcon={images.drawer}
          leftAction={() => navigation.openDrawer()}
        />

        <ProfileItem
          hide
          subHeading={userData.username}
          heading={userData.email}
        />

        <View style={styles.row}>
          <FastImage
            tintColor={colors.grey}
            style={styles.icon}
            resizeMode="contain"
            source={images.company}
          />
          <Text style={styles.title}>{userData?.company?.name}</Text>
        </View>

        <View style={styles.row}>
          <FastImage
            tintColor={colors.grey}
            style={styles.icon}
            resizeMode="contain"
            source={images.website}
          />
          <Text style={styles.title}>{userData?.website}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: Colors) => {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    safe: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    column: {
      justifyContent: 'space-between',
    },
    flatlist: {
      flexGrow: 1,
      paddingHorizontal: getScreenHeight(1),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: getScreenHeight(1.5),
    },
    icon: {
      height: getScreenHeight(2.5),
      width: getScreenHeight(2.5),
      marginRight: getScreenHeight(1),
    },
    title: {
      fontFamily: fonts.medium,
      fontSize: fontSize.l,
      color: theme.grey,
    },
  });
};

export default ProfileOverView;
