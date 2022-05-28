import React from "react";
import { StyledHeader } from "../styles/Header.styled";
import { ContainerFluid } from "../styles/ContainerFluid.styled";
import Navbar from "../ui/Navbar";

const Header = () => {
    return (
        <StyledHeader>
            <ContainerFluid>
                <Navbar />
            </ContainerFluid>
        </StyledHeader>
    );
};

export default Header;
