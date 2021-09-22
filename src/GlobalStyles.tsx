import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html {
    margin: 0;
    font-size: 10px;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({theme}) => theme.palette.secondaryVariant};
  }

  #root {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 1.6rem;
    min-width: 1200px; // hardcode for now. Remove later
  }
`;
