import {RouteProp, useTheme} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef} from 'react';
import {Keyboard, Platform, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Files
import {Colors} from '../../theme';
import {getScreenHeight} from '../../utils/commonServices';
import {
  CustomButton,
  CustomHeader,
  CustomSpacer,
  CustomTextInput,
} from '../../components';
import images from '../../constants/images';
import {goBack} from '../../utils/routerServices';
import localization from '../../localization';
import {useDispatch} from 'react-redux';
import {editPostThunk} from '../../redux/common';
import {Post} from '../../services/blogs';
import {showMessage} from 'react-native-flash-message';

type RootStackParamList = {
  BlogDetail: {
    item: Post;
  };
};

type EditBlogProps = {
  route: RouteProp<RootStackParamList, 'BlogDetail'>;
};

const EditBlog: React.FC<EditBlogProps> = ({route}: any) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const item = route.params.item;
  const dispatch = useDispatch();

  const titleRef: any = useRef(null);
  const titleValueRef: any = useRef(null);
  const bodyRef: any = useRef(null);
  const bodyValueRef: any = useRef(null);

  useEffect(() => {
    if (item) {
      titleValueRef.current.setValue(item.title);
      bodyValueRef.current.setValue(item.body);
    }
  }, [item]);

  const onUpdateButtonPress = () => {
    const postData = {
      title: titleValueRef.current.getValue(),
      body: bodyValueRef.current.getValue(),
      id: item.id,
      userId: item.userId,
    };

    dispatch<any>(editPostThunk(postData));
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          leftIcon={images.back}
          leftAction={goBack}
          title={item.title}
        />
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          contentContainerStyle={styles.scrollView}>
          <View>
            <CustomSpacer />
            <CustomTextInput
              ref={titleValueRef}
              inputRef={titleRef}
              placeholder={`${localization.typeSomething}`}
              type="next"
              maxLength={100}
              star
              onSubmit={() => {
                bodyRef.current.focus();
              }}
              label={`${localization.title}`}
            />

            <CustomSpacer />
            <CustomTextInput
              textAreaInput
              multiline={true}
              numberOfLines={3}
              ref={bodyValueRef}
              inputRef={bodyRef}
              placeholder={`${localization.typeSomething}`}
              type="done"
              maxLength={500}
              star
              onSubmit={() => {
                Keyboard.dismiss();
              }}
              label={`${localization.description}`}
            />
          </View>

          <View>
            <CustomButton
              action={onUpdateButtonPress}
              title={localization.update}
            />
            <CustomSpacer height={getScreenHeight(4)} />
          </View>
        </KeyboardAwareScrollView>
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
    scrollView: {
      flexGrow: 1,
      paddingHorizontal: getScreenHeight(2),
      justifyContent: 'space-between',
    },
  });
};

export default EditBlog;
