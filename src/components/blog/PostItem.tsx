import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';

// Files
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import fonts from '../../constants/fonts';
import CustomSpacer from '../CustomSpacer';
import {navigate} from '../../utils/routerServices';
import routes from '../../constants/routes';
import {Post} from '../../services/blogs';
import {fontSize} from '../../theme/text-variants';

const PostItem = ({title, body, id, userId, image}: Post) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Pressable
      onPress={() =>
        navigate(routes.BLOG_DETAIL, {
          item: {
            body,
            id,
            title,
            userId,
            image,
          },
        })
      }
      style={styles.item}>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <CustomSpacer />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <CustomSpacer height={getScreenHeight(0.5)} />
        <Text style={styles.subtitle} numberOfLines={3}>
          {body}
        </Text>
        <CustomSpacer height={getScreenHeight(0.5)} />

        <Text style={styles.date}>{dayjs().format('MMMM DD YYYY')}</Text>
      </View>
      <CustomSpacer height={getScreenHeight(1)} />
    </Pressable>
  );
};

const createStyles = (theme: Colors) =>
  StyleSheet.create({
    item: {
      width: '49%',
      marginBottom: getScreenHeight(2),
      borderRadius: getScreenHeight(2),
      overflow: 'hidden',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: theme.background,
      borderColor: theme.grey,
      borderWidth: getScreenHeight(0.1),
    },
    title: {
      fontFamily: fonts.semibold,
      color: theme.textColor,
      fontSize: fontSize.l,
    },
    subtitle: {
      fontFamily: fonts.regular,
      color: theme.grey,
      fontSize: fontSize.m,
    },
    date: {
      fontFamily: fonts.regular,
      fontSize: fontSize.s,
      textAlign: 'right',
      color: theme.grey,
    },
    image: {
      width: '100%',
      height: getScreenHeight(15),
    },
    content: {
      paddingHorizontal: getScreenHeight(1),
    },
  });

export default memo(PostItem);
