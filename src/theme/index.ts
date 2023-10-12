export type Colors = {
  backgroundColor: string;
  textColor: string;
  primary: string;
  background: string;
  card: string;
  text: string;
  notification: string;
  border: string;
  grey: string;
};

export const DarkTheme = {
  dark: true,
  colors: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    primary: '#ADD8E6',
    background: '#000000',
    card: '#000000',
    text: '#000000',
    notification: '#000000',
    border: '#000000',
    grey: '#808080',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    primary: '#ADD8E6',
    background: '#ffffff',
    card: '#ffffff',
    text: '#ffffff',
    notification: '#ffffff',
    border: '#ffffff',
    grey: '#808080',
  },
};
