import {NavigationProp, useTheme} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {
  FlatList,
  Platform,
  RefreshControl,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

// Files
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomHeader, CustomSpacer, NotFound} from '../../components';
import images from '../../constants/images';
import {getUserPostsThunk} from '../../redux/common';
import PostItem from '../../components/blog/PostItem';
import localization from '../../localization';

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
      StatusBar.setBarStyle('dark-content');
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
          title={localization.blogs}
          leftIcon={images.drawer}
          leftAction={() => navigation.openDrawer()}
        />

        <FlatList
          data={posts}
          keyExtractor={item => `${item.id}${'slslk'}`}
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
    column: {
      justifyContent: 'space-between',
    },
    flatlist: {
      flexGrow: 1,
      paddingHorizontal: getScreenHeight(1),
    },
  });
};

export default Blogs;
