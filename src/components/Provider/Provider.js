import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {

  font-family: 'Lato', sans-serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  min-height: 100vh;
}

h1,
h2,
h3,
h4 {
  margin: 0;
	padding: 0;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}

ul {
    list-style: none;
}
img {
display:block;
width:100%;
}
`;

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
