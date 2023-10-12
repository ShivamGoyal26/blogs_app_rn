import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import fonts from '../../constants/fonts';
import CustomSpacer from '../CustomSpacer';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';
import images from '../../constants/images';
import {navigate} from '../../utils/routerServices';
import routes from '../../constants/routes';

type PostItemProps = {
  title?: string;
  body?: string;
  id?: number;
};

const PostItem = ({title, body, id}: PostItemProps) => {
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
          },
        })
      }
      style={styles.item}>
      <FastImage style={styles.image} source={images.airplane} />
      <CustomSpacer />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <CustomSpacer height={getScreenHeight(0.5)} />
        <Text style={styles.subtitle} numberOfLines={4}>
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
      width: '46%',
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
      fontSize: getScreenHeight(1.6),
    },
    subtitle: {
      fontFamily: fonts.regular,
      color: theme.grey,
      fontSize: getScreenHeight(1.3),
      // textAlign: 'left',
    },
    date: {
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(1.1),
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
