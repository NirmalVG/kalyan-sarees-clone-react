import React from "react";
import { StyledHeader, Logo } from "../styles/Header.styled";
import { ContainerFluid } from "../styles/ContainerFluid.styled";

const Header = () => {
    return (
        <StyledHeader>
            <ContainerFluid>
                <Logo src="images/kalyan-sarees-logo.png" alt="logo" />
            </ContainerFluid>
        </StyledHeader>
    );
};

export default Header;
