import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`

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

  font-family: sans-serif;
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
