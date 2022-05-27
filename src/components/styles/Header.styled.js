import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    height: 108px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 50px;
    }
`;

export const Logo = styled.img``;


