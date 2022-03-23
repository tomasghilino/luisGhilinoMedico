import styled from 'styled-components';

export const HeroContainer = styled.div`
    
    height: 100vh;
`;

export const BackgroundVideo = styled.video`
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(calc((100% - 100vw) / 2));
    filter: brightness(80%);
    overflow: hidden;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;

export const HeroContentTitulo = styled.div`
    display: block;
    width: 30rem;       // ???????????????????????????????????????????????????
`;

export const HeroContentIcons = styled.div`
    display: block;
`;