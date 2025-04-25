import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    list-style: none;
    text-decoration: none;
    color: #111;
  }

  body {
    line-height: 1.3;
  }

  button {
    cursor: pointer;
    border: 0px;
  }

  


`

export default GlobalStyle;