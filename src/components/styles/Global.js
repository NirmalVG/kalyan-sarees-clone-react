import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    img {
        max-width: 100%;
    }

    h3 {
        @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
        text-align: center;
        color: #000000;
        font-size: 31px;
        font-family: "Questrial", sans-serif;
        font-weight: 700;
    }

    p {
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        text-align: center;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: #54546F;
    }

    h6 {
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
        padding: 10px;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 15px;
        font-weight: 300;
        font-family: 'Ubuntu', sans-serif;
    }
`;

export default GlobalStyles;
