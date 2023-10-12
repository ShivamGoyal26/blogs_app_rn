import {useTheme} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../../theme';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomHeader, CustomSpacer} from '../../components';
import images from '../../constants/images';
import FastImage from 'react-native-fast-image';
import localization from '../../localization';

const BlogDetail = ({navigation, route}) => {
  const theme = useTheme();
  const {colors} = theme;
  const title = route.params.title;
  const body = route.params.body;
  const styles = useMemo(() => createStyles(colors), [colors]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary);
    }
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          title={title}
          rightIcon={images.drawer}
          rightAction={() => navigation.openDrawer()}
        />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <FastImage source={images.airplane} style={styles.image} />
          <CustomSpacer />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <CustomSpacer height={getScreenHeight(1)} />

            <Text style={styles.subtitle}>{body}</Text>

            <CustomSpacer height={getScreenHeight(4)} />

            <View style={styles.row}>
              <TouchableOpacity>
                <Text style={styles.title}>{localization.edit}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[styles.title, {color: colors.error}]}>
                  {localization.delete}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    image: {
      width: '100%',
      height: getScreenHeight(30),
    },
    content: {
      paddingHorizontal: getScreenHeight(2),
    },
    title: {
      fontFamily: fonts.medium,
      fontSize: getScreenHeight(1.8),
      textTransform: 'capitalize',
      color: theme.textColor,
    },
    subtitle: {
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(1.4),
      textTransform: 'capitalize',
      color: theme.grey,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};

export default BlogDetail;
