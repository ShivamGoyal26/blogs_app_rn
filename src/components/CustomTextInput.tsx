import React, {forwardRef, useImperativeHandle, useMemo, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getScreenHeight} from '../utils/commonServices';
import fonts from '../constants/fonts';
import {useTheme} from '@react-navigation/native';

const CustomTextInput = forwardRef((props: any, ref: any) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    getValue() {
      return text.trim();
    },
    setValue(value: any) {
      setText(value);
    },
  }));

  const onChangeHandler = (value: any) => {
    if (props.trim) {
      value.trim();
    }
    setText(() => value);
  };

  return (
    <View>
      {props.label ? (
        <Text numberOfLines={1} style={styles.label}>
          {props.label}
          <Text style={{color: colors.error}}>{props.star ? '*' : ''}</Text>
        </Text>
      ) : null}
      <View
        style={[
          styles.mainContainer,
          {
            height: props.textAreaInput
              ? Platform.OS === 'android'
                ? getScreenHeight(10)
                : getScreenHeight(10)
              : Platform.OS === 'android'
              ? getScreenHeight(6)
              : getScreenHeight(6),
          },
        ]}>
        {props.leftIcon ? (
          <TouchableOpacity
            disabled={props.leftAction ? false : true}
            onPress={props.leftAction}
            style={styles.iconContanier}>
            <FastImage
              tintColor={props.leftTint ? props.leftTint : theme.iconColor}
              resizeMode="contain"
              style={styles.icon}
              source={props.leftIcon}
            />
          </TouchableOpacity>
        ) : (
          <View style={{marginRight: getScreenHeight(1)}} />
        )}
        <View style={styles.textInputContanier}>
          <TextInput
            editable={props.editable}
            ref={props.inputRef}
            onSubmitEditing={props.onSubmit}
            returnKeyType={props.type ? props.type : 'done'}
            style={[
              styles.textInput,
              {textAlignVertical: props.textAreaInput ? 'top' : null},
            ]}
            secureTextEntry={props.secure}
            {...props}
            value={props.value ? props.value : text}
            onChangeText={txt => {
              props.action
                ? props.action(props.trim ? txt.trim() : txt)
                : onChangeHandler(props.trim ? txt.trim() : txt);
            }}
            placeholderTextColor={colors.grey}
            placeholder={props.placeholder}
          />
        </View>
        {props.rightIcon ? (
          <TouchableOpacity
            disabled={props.rightAction ? false : true}
            onPress={props.rightAction}
            style={[
              styles.iconContanier,
              {
                height: props.textAreaInput
                  ? Platform.OS === 'android'
                    ? getScreenHeight(12)
                    : getScreenHeight(12)
                  : Platform.OS === 'android'
                  ? getScreenHeight(6)
                  : getScreenHeight(6),
              },
            ]}>
            <FastImage
              resizeMode="contain"
              style={styles.icon}
              source={props.rightIcon}
              tintColor={props.rightTint ? props.rightTint : theme.iconColor}
            />
          </TouchableOpacity>
        ) : props.rightLoading ? (
          <ActivityIndicator size={'small'} color={theme.primaryColor} />
        ) : (
          <View style={{marginRight: getScreenHeight(1)}} />
        )}
      </View>
    </View>
  );
});

const createStyles = (theme: any) =>
  StyleSheet.create({
    textInput: {
      alignItems: 'center',
      height: '90%',
      fontFamily: fonts.regular,
      fontSize: getScreenHeight(1.6),
      color: theme.textColor,
      backgroundColor: theme.white,
    },
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: theme.textColor,
      borderWidth: getScreenHeight(0.2),
      borderRadius: getScreenHeight(1),
      backgroundColor: theme.white,
    },
    textInputContanier: {
      flex: 1,
    },
    label: {
      color: theme.grey,
      fontSize: getScreenHeight(1.6),
      fontFamily: fonts.medium,
      marginLeft: Platform.OS === 'android' ? getScreenHeight(0.5) : 0,
      marginBottom: getScreenHeight(1),
    },
    input: {
      fontSize: getScreenHeight(1.5),
      color: theme.textColor,
    },
    iconContanier: {
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      height: getScreenHeight(2.5),
      width: getScreenHeight(2.5),
    },
    inputContanier: {
      flex: 1,
      color: theme.textColor,
    },
  });

export default CustomTextInput;
