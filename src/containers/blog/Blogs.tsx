import {NavigationProp, useTheme} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {
  Alert,
  FlatList,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../../theme';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomHeader, CustomSpacer, NotFound} from '../../components';
import images from '../../constants/images';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getUserPostsThunk} from '../../redux/common';
import PostItem from '../../components/blog/PostItem';

type BlogsProps = {
  navigation: NavigationProp<{}>; // Replace {} with the correct route param type
};

const Blogs: React.FC<BlogsProps> = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const userData = useSelector((state: any) => state.auth.userData);
  const posts = useSelector((state: any) => state.common.posts, shallowEqual);
  const loading = useSelector((state: any) => state.common.loading);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    dispatch<any>(getUserPostsThunk(userData.id));
  }, [dispatch, userData?.id]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary);
    }
  }, [colors?.primary]);

  useEffect(() => {
    if (userData?.id) {
      dispatch<any>(getUserPostsThunk(userData.id));
    }
  }, [dispatch, userData?.id]);

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          title="Blogs"
          rightIcon={images.drawer}
          rightAction={() => navigation.openDrawer()}
        />

        <FlatList
          data={posts}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
          ListHeaderComponent={CustomSpacer}
          renderItem={({item}) => <PostItem {...item} />}
          columnWrapperStyle={styles.column}
          contentContainerStyle={styles.flatlist}
          ListEmptyComponent={loading ? null : NotFound}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
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
    },
    safe: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    title: {
      fontFamily: fonts.medium,
      fontSize: getScreenHeight(2),
      color: theme.textColor,
    },
    column: {
      justifyContent: 'space-evenly',
    },
    flatlist: {
      flexGrow: 1,
    },
  });
};

export default Blogs;
