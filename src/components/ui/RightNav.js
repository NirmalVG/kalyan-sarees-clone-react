import React, { useState } from "react";
import { Ul, IconPack } from "../styles/Header.styled";
import { NavLink, NavActiveLink } from "../styles/Header.styled";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import {
    DropdownLink,
    StyledDropdown,
    StyledDropdownContent,
} from "../styles/StyledDropdown.styled";

const RightNav = ({ open }) => {
    const [dropdown, setDropdown] = useState(false);
    const [faqsDropdown, setFaqsDropdown] = useState(false);

    return (
        <Ul open={open}>
            <li>
                <NavActiveLink to="/">HOME</NavActiveLink>
            </li>
            <li>
                <NavLink to="/shop">
                    <StyledDropdown
                        show={dropdown}
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        SHOP <AiOutlineDown size={10} />
                        <StyledDropdownContent dropdown={dropdown}>
                            <h2>WOMEN</h2>
                            <DropdownLink to="/sarees">Sarees</DropdownLink>
                            <DropdownLink to="/lehenga">
                                Bridal Lehenga
                            </DropdownLink>
                            <DropdownLink to="/gowns">Gowns</DropdownLink>
                            <DropdownLink to="/salwar-readymade">
                                Salwar Readymade
                            </DropdownLink>
                            <DropdownLink to="/salwar-suit">
                                Salwar Suit
                            </DropdownLink>
                            <DropdownLink to="/kurtas">Kurtas</DropdownLink>
                            <DropdownLink to="/tops">Tops</DropdownLink>
                            <DropdownLink to="leg-wear">Leg Wear</DropdownLink>
                            <h2>MEN</h2>
                            <h2>KIDS</h2>
                        </StyledDropdownContent>
                    </StyledDropdown>
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
                <NavLink to="/blog">THE BLOG</NavLink>
            </li>
            <li>
                <NavLink to="/faqs">
                    <StyledDropdown
                        show={faqsDropdown}
                        onMouseEnter={() => setFaqsDropdown(true)}
                        onMouseLeave={() => setFaqsDropdown(false)}
                    >
                        FAQS <AiOutlineDown size={10} />
                        <StyledDropdownContent faqsDropdown={faqsDropdown}>
                            <DropdownLink to="/shipping-policy">
                                Shipping Policy
                            </DropdownLink>
                            <DropdownLink to="/return-policy">
                                Return Policy
                            </DropdownLink>
                            <DropdownLink to="/terms-of-service">
                                Terms Of Service
                            </DropdownLink>
                        </StyledDropdownContent>
                    </StyledDropdown>
                </NavLink>
            </li>
            <li>
                <NavLink to="/store">STORE TOUR</NavLink>
            </li>
            <li>
                <NavLink to="/track">TRACK YOUR ORDER</NavLink>
            </li>
            <li>
                <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <IconPack>
                <li>
                    <NavLink to="/cart">
                        <RiShoppingCartLine size={20} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin">
                        <FaRegUserCircle size={20} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin">
                        <FiSearch size={20} />
                    </NavLink>
                </li>
            </IconPack>
        </Ul>
    );
};

export default RightNav;
