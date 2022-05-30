import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    height: 505px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 585px;
    }

    p {
        font-size: 13px;
        color: #868686;
        padding-top: 10px;
    }

    ul {
        list-style-type: none;
    }
`;

export const FooterLogo = styled.img`
    border-bottom: 1px solid #000;
    margin-top: 0px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-top: 0px;
    }

`;
