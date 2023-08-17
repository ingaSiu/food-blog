import { createGlobalStyle } from 'styled-components';
import gloriaHallelujah from '../../assets/fonts/gloriaHallelujah.woff2';
import lato from '../../assets/fonts/lato.woff2';

const GlobalStyles = createGlobalStyle`
body {
  background: #fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 body, button, form, input, textarea, select {
  font-family: 'Lato', sans-serif;
  
}
input, textarea, select {
  box-sizing: border-box;
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

//https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(${lato}) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

//https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap
@font-face {
    font-family: 'Gloria Hallelujah';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${gloriaHallelujah}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

`;

export default GlobalStyles;
