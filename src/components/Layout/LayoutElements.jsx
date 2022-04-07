import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #189AB4;
        --secondary: #75E6DA;
        --darker: #05445E;
        --brighter: #D4F1F4;
        --white: #eff6f7;
        --black: #010c11;
        --gray : #d6d6d6;
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
        background-color: var(--gray);
    }

    p, h1, h2, h3, h4 {
        margin: 0;
    }



    // SCROLLBAR STYLES
    /* width */
    ::-webkit-scrollbar {
    width: 8px;
    

    transition: all .2s ease-in-out
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #031e2a;
    
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: var(--primary);
    height: 100px;
    border-radius: 1rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: var(--darker);
    }

    // opera detach button
    #detach-button-host {
    display: none !important;
}
`
