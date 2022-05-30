import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    a {
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
        color: #000;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
    }

    a:hover {
        opacity: 0.7;
    }

    ul {
        display: flex;
        flex-flow: row nowrap;
        text-align: center;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ul li + li:before {
        content: " | ";
        padding: 0 10px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        iframe {
            height: auto;
        }
        ul li + li:before {
            display: none;
        }

        ul {
            flex-flow: column nowrap;
            justify-content: center;
        }

        li {
            padding-bottom: 15px;
        }
    }
`;

export const CenterText = styled.div`
    display: flex;
    justify-content: center;

    a {
        color: #868686;
    }
`;
