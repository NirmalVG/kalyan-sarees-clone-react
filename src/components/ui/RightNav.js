import React from "react";
import { Ul, IconPack } from "../styles/Header.styled";
import { NavLink, NavActiveLink } from "../styles/Header.styled";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <NavActiveLink to="/">HOME</NavActiveLink>
            </li>
            <li>
                <NavLink to="/shop">
                    SHOP <AiOutlineDown size={10} />
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
                    FAQS <AiOutlineDown size={10} />
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
