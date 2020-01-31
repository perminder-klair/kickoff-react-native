import { Platform } from 'react-native';

const lightShades = '#F9F9F9';
const darkShades = '#1C1323';

const theme = {
  lightShades,
  darkShades,
  primaryColor: '#72C4FF',
  secondaryColor: '#54EA97',
  borderColor: '#F5F5F5',
  textColor: '#1D2025',
  textColorLite: '#638391',
  dangerColor: '#FF8181',
  fontFamily: 'Raleway',
  fontSizeExtraSmall: 12,
  fontSizeSmall: 14,
  fontSize: 15,
  fontSizeMedium: 18,
  fontSizeLarge: 28,
  fontSizeExtraLarge: 32,
  shadowColor: '#DEDEDE',
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 1,
  activeButtonOpacity: 0.8,
  backgroundColor: '#FFFFFF',
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
