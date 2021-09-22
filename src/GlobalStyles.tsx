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
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 10px;
  }

  #root {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-size: 1.6rem;
    min-width: 600px; // hardcode for now. Remove later
  }
`;
