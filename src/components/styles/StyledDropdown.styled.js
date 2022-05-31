import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover {
        color: #ec1848;
    }
`;
export const StyledDropdownContent = styled.div`
    display: ${({ dropdown, faqsDropdown }) =>
        !dropdown && !faqsDropdown ? "none" : "block"};
    position: absolute;
    background-color: #fff;
    min-width: 350px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 30px 30px;

    h2 {
        font-size: 15px;
        color: black;
    }

    div {
        margin-bottom: -15px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        min-width: 230px;
    }
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: 500;
    padding: 8px 0 8px 0;
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform-origin: bottom left;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const StyledSubmenu = styled.div`
    display: ${({ sareesSubmenu }) => (!sareesSubmenu ? "none" : "block")};
    position: absolute;
    background-color: #fff;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 30px 30px;
    top: 58px;
    left: 310px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        left: 0px;
        top: 125px;
        min-width: 230px;
    }
`;

export const LegwearSubmenu = styled.div`
    display: ${({ legwearSubmenu }) => (!legwearSubmenu ? "none" : "block")};
    position: absolute;
    background-color: #fff;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 30px 30px;
    top: 272px;
    left: 310px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        left: 0px;
        top: 328px;
        min-width: 230px;
    }
`;
