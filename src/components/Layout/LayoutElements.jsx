import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    body{
        background-color: #6e0707;
    }
`
