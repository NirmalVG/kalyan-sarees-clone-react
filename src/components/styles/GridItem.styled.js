import styled from "styled-components";

export const FirstItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 9;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 5;
    }
`;

export const SecondItem = styled.div`
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 5;
        grid-row-end: 9;
    }
`;

export const ThirdItem = styled.div`
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 9;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 9;
        grid-row-end: 13;
    }
`;

export const FourthItem = styled.div`
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 9;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 13;
        grid-row-end: 17;
    }
`;

export const BannerItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
    overflow: hidden;
    outline: 2px solid white;
    outline-offset: -15px;
`;

export const FirstAdItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 9;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 5;
    }
`;

export const SecondAdItem = styled.div`
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 9;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 5;
        grid-row-end: 9;
    }
`;
