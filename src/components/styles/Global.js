import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap');

body, button {
  font-family: 'Lato', sans-serif;
  background: #fff;
  margin: 0;
}
`;

export default GlobalStyles;
