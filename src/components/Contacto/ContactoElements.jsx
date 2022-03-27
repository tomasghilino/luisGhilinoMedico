import styled from "styled-components";

export const ContactoContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media(max-width: 768px) {
        
    }
`;

export const ContactoFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;

    background-color: var(--brighter);
`;

export const ContactoMapContainer = styled.div`
    height: 65vh;
`;