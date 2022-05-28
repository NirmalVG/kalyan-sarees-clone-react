import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    height: 108px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 50px;
    }
`;

export const Logo = styled.img`
    padding-top: 10px;
`;

export const Nav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#ccc" : "#333")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 15px;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: ${({ open }) => (!open ? "none" : "inline")};
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-flow: column nowrap;
        background-color: #0d2538;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 85vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        position: absolute;
        position: ${({ open }) => (open ? "inline" : "none")};
        li {
            color: #fff;
        }
    }
`;

export const NavLink = styled(Link)`
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    text-decoration: none;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    font-family: inherit;
    font-size: 13px;
    font-family: "Roboto", sans-serif;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        color: #fff;
    }
`;

export const NavActiveLink = styled(NavLink)`
    color: #ec1848;
`;

export const IconPack = styled.span`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`