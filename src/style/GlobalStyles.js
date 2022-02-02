import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}

/*  */
h1{
    padding: 0;
    margin:0;
    
}

/* Reset */

li{
    list-style: none;
}


a{
    text-decoration: none;
}

html{
    font-size: 16px;   
}

body{
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme: { bgColor } }) => bgColor};
    transition: background 300ms ease;
}

button{
    border:none;
    outline:none;
}

/* .activated{
    color:yellow;
} */

`
