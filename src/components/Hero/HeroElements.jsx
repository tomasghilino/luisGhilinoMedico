import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;

`;

export const BackgroundVideo = styled.video`
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(calc((100% - 100vw) / 2));
    filter: brightness(70%);
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const HeroContentTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30rem;       // ???????????????????????????????????????????????????
    color: var(--brighter);
    
    h1 {
        font-size: 3.5rem;
    }
    h1::after {
        display: block;
        content: '';
        height: 2px;
        width: 75%;
        background-color: var(--darker);
        margin-top: 2rem;
    }

`;

export const HeroContentIcons = styled.div`
    display: block;
`;