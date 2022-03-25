import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;

`;

export const BackgroundVideo = styled.video`
    z-index: -1;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    
    filter: brightness(60%);
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 100%;
    margin-left: 10%;

    @media(max-width: 768px){
        margin: 0;
    }
`;

export const HeroContentTitulo = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--brighter);
    transition: all .4s;
    
    h1 {
        font-size: 3.5rem;
    }
    h1::after {
        display: block;
        content: '';
        height: 2px;
        width: 75%;
        background-color: var(--primary);
        margin-top: 2rem;
    }
    p {
        margin-top: 1rem;
        font-size: 1.3rem;
    }
    
    @media(max-width: 768px){
        transform: scale(.8);
    }
`;
