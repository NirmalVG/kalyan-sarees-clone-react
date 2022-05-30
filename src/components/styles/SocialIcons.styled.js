import styled from "styled-components";

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }

    a {
        color: #000;
        display: inline-flex;
        justify-content: center;
        margin-right: 20px;
        margin-top: 105px;
        padding-right: 18px;
        text-decoration: none;
    }

    a:hover {
        opacity: 0.7;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        a {
            margin-top: 20px;
        }
    }
`;
