import { DefaultTheme } from 'styled-components';

import headerBackground from '@assets/header-top-background.png';

export const defaultTheme: DefaultTheme = {
  size: {
    pageHorizontalPadding: '20px',
  },
  palette: {
    primary: '#F65261',
    secondary: '#424242',
    secondaryVariant: '#555',
    accent: '#232323',
    accentVariant: '#606060',
    textPrimary: '#FFFFF',
  },
  urls: {
    headerBackground,
  }
};
