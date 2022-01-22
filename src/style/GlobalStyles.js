import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

/* Reset */


a{
    text-decoration: none;
}

html{
    font-size: 16px;   
}

body{
    font-family: 'Nunito', sans-serif;
    background: ${({ theme: { bgColor } }) => bgColor};
}

button{
    border:none;
    outline:none;
}

`;
