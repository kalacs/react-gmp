export interface ThemeSizes {
  pageHorizontalPadding: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    size: ThemeSizes;
    palette: {
      primary: string;
      secondary: string;
      secondaryVariant: string;
      accent: string;
      accentVariant: string;
      textPrimary: string;
    };
    urls: {
      headerBackground: string;
    }
  }
}
