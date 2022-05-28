import React from "react";
import Hamburger from "./Hamburger";
import { Nav } from "../styles/Header.styled";
import { Logo } from "../styles/Header.styled";

const Navbar = () => {
    return (
        <Nav>
            <div className="logo"><Logo src="images/kalyan-sarees-logo.png" alt="logo" /></div>
            <Hamburger />
        </Nav>
    );
};

export default Navbar;
