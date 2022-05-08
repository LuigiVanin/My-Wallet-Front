import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        width: 100%;
        background-color: #8C11BE;
        font-family: 'Raleway', sans-serif;
    }
    .root{
        min-height: 100vh;
    }
`;

export default GlobalStyle;
