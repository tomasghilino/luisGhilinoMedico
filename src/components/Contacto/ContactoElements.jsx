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
    
    background-color: var(--brighter);

    @media(max-width: 768px) {
        height: 600px;
    }
`;

export const ContactoMapContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3rem;
    background-color: var(--darker);
`;