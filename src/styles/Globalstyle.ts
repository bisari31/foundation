import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');

  ${reset}

  body,
  button,
  input,
  textarea {
    font-family: Roboto, 'Spoqa Han Sans Neo', sans-serif;
  }

`;

export default GlobalStyle;
