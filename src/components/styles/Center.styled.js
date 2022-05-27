import styled from "styled-components"

export const Center = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    a {
        color: #868686;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        iframe {
            height: auto;
        }
    }
`;