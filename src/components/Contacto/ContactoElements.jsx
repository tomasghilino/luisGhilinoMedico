import styled from "styled-components";

export const ContactoContainer = styled.div`
    display: flex;

    @media(max-width: 768px) {
        display: block;
    }
`;

export const ContactoFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    
    background-color: var(--brighter);

    &::after{
        position: absolute;
        content: '';
        right: -5px;
        height: 80%;
        width: 4px;
        border-radius: 1rem;
        background-color: var(--primary);
    }

    @media(max-width: 768px) {
        height: 600px;

        &::after{
        right: auto;
        bottom: -5px;
        height: 4px;
        width: 75%;
    }
    }
`;

export const ContactoMapContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3rem;
    background-color: var(--darker);
`;