import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

html{
    font-size: 16px;   
}

body{
    font-family: 'Open Sans', sans-serif;
}

`;
