import styled from "styled-components";

export const CustomIFrame = styled.iframe`
    width: 100%;
    height: 800px;
    border: 0;

    @media(max-width: 768px) {
        height: 550px;
    }
`;