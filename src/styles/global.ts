import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    /* font: 16px Roboto, sans-serif; */
    font: 16px 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */
`;
