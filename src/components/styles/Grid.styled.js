import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(16, 8vw);
    }
`;

export const BannerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 5vw);
    margin-bottom: 50px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`;

export const AdGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 5vw);

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(9, 8vw);
        grid-gap: 15px;
    }
`;
