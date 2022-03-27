import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #189AB4;
        --secondary: #75E6DA;
        --darker: #05445E;
        --brighter: #D4F1F4;
        --white: #eff6f7;
        --black: #010c11;
    }

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    body{
        font-family: "Nunito", sans-serif;
        background-color: var(--brighter);
    }

    p, h1, h2, h3, h4 {
        margin: 0;
    }
`
