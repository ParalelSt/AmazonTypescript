import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background-color: #E3E6E6;
    }

    button {
        background-color: transparent;
        border: none;
    }

`;
