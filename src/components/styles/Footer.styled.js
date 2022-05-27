import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    height: 505px;

    p {
        font-size: 13px;
        color: #868686;
    }
`;

export const FooterLogo = styled.img`
    border-bottom: 1px solid #000;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
