import styled from "styled-components";

export const Flex = styled.div`
    flex: calc(100% / 3);
    max-width: calc(100% / 3);
    padding: 0 4px;

    p {
        color: #545454;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px 10px 10px 10px;
    }

    a {
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        text-decoration: none;
        color: #cc0000;
        padding: 0px 10px 10px 10px;
        margin-top: 0px;
        font-size: 13px;
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
    }

    a:hover {
        opacity: 0.7;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex: calc(100% / 2);
        max-width: calc(100% / 2);
        padding: 0 2px;
    }
`;
