import styled from "styled-components";

export const FirstItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 9;
    position: relative;
`;

export const SecondItem = styled.div`
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
    position: relative;
`;

export const ThirdItem = styled.div`
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 9;
    position: relative;
`;

export const FourthItem = styled.div`
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 9;
    position: relative;
`

export const BannerItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;

    h3 {
        position: absolute;
    }
`