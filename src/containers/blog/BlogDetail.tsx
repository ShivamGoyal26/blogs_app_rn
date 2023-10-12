import {RouteProp, useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {
  ScrollView,
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
import {goBack, navigate} from '../../utils/routerServices';
import routes from '../../constants/routes';

type RootStackParamList = {
  BlogDetail: {
    item: {id: number; title: string; body: string};
  };
};

type BlogDetailProps = {
  route: RouteProp<RootStackParamList, 'BlogDetail'>;
};

const BlogDetail: React.FC<BlogDetailProps> = ({route}) => {
  const theme = useTheme();
  const {colors} = theme;
  const item = route.params.item;
  const styles = useMemo(() => createStyles(colors), [colors]);

  const onEditButtonPress = () => {
    navigate(routes.EDIT_BLOG, {item: item});
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          leftIcon={images.back}
          leftAction={goBack}
          title={item.title}
        />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <FastImage source={images.airplane} style={styles.image} />
          <CustomSpacer />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <CustomSpacer height={getScreenHeight(1)} />

            <Text style={styles.subtitle}>{item.body}</Text>

            <CustomSpacer height={getScreenHeight(4)} />

            <View style={styles.row}>
              <TouchableOpacity onPress={onEditButtonPress}>
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
