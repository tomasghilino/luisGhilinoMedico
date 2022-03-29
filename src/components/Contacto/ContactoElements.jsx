import styled from "styled-components";

export const ContactoContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

export const ContactoFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;

    background-color: var(--brighter);
`;

export const ContactoMapContainer = styled.div`
    display: flex;
    justify-content: center;
`;