import {useTheme} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Files
import {Colors} from '../../theme';
import fonts from '../../constants/fonts';
import {getScreenHeight} from '../../utils/commonServices';
import {CustomHeader} from '../../components';
import images from '../../constants/images';

const Blogs = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary);
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <View style={styles.screen}>
        <CustomHeader
          title="Blogs"
          rightIcon={images.drawer}
          rightAction={() => navigation.openDrawer()}
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
  });
};

export default Blogs;
