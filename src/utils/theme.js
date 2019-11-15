import { Platform } from 'react-native';

const mainBrandColor = '#a22f83';
const lightShades = '#F9F9F9';
const darkShades = '#1C1323';

const theme = {
  mainBrandColor,
  lightShades,
  darkShades,
  primaryColor: mainBrandColor,
  backgroundColor: '#ffffff',
  borderColor: '#e2e6ed',
  textColor: '#233249',
  textColorLite: '#9ea1a7',
  shadowColor: '#616161',
  fontFamily: 'Lato',
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 26,
  fontSizeExtraLarge: 36,
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 1,
  activeButtonOpacity: 0.8,
};

export default theme;

export const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.shadowColor,
    shadowOffset: theme.shadowOffset,
    shadowOpacity: theme.shadowOpacity,
    shadowRadius: theme.shadowRadius,
  },
  android: {
    elevation: 2,
  },
});
