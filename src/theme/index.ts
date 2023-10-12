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
};

export const DarkTheme = {
  dark: true,
  colors: {
    backgroundColor: '#000000',
    textColor: platte.white,
    primary: '#ADD8E6',
    background: '#000000',
    card: '#000000',
    text: '#000000',
    notification: '#000000',
    border: '#000000',
    grey: '#808080',
    error: '#f1807e',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    backgroundColor: platte.white,
    textColor: '#000000',
    primary: '#ADD8E6',
    background: '#ffffff',
    card: '#ffffff',
    text: '#ffffff',
    notification: '#ffffff',
    border: '#ffffff',
    grey: '#808080',
    error: '#f1807e',
  },
};
