import {ColorValue} from 'react-native';

export type Colors = {
  backgroundColor: string;
  textColor: ColorValue;
  primary: ColorValue;
  background: ColorValue;
  card: ColorValue;
  text: ColorValue;
  notification: ColorValue;
  border: ColorValue;
  grey: ColorValue;
  error: ColorValue;
};

export const platte = {
  white: '#ffffff',
  lightRose: '#f1807e',
  lightGrey: '#808080',
  black: '#000000',
  lightBlue: '#ADD8E6',
};

export const DarkTheme = {
  dark: true,
  colors: {
    backgroundColor: platte.black,
    textColor: platte.white,
    primary: platte.lightGrey,
    background: platte.black,
    card: platte.black,
    text: platte.black,
    notification: platte.black,
    border: platte.black,
    grey: platte.lightGrey,
    error: platte.lightRose,
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    backgroundColor: platte.white,
    textColor: platte.black,
    primary: platte.lightBlue,
    background: platte.white,
    card: platte.white,
    text: platte.white,
    notification: platte.white,
    border: platte.white,
    grey: platte.lightGrey,
    error: platte.lightRose,
  },
};
