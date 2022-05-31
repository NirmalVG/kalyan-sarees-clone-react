import React, { useState } from "react";
import { Ul, IconPack } from "../styles/Header.styled";
import { NavLink, NavActiveLink } from "../styles/Header.styled";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
    DropdownLink,
    LegwearSubmenu,
    StyledDropdown,
    StyledDropdownContent,
    StyledSubmenu,
} from "../styles/StyledDropdown.styled";

const RightNav = ({ open }) => {
    const [dropdown, setDropdown] = useState(false);
    const [faqsDropdown, setFaqsDropdown] = useState(false);
    const [sareesSubmenu, setSareesSubmenu] = useState(false);
    const [legwearSubmenu, setLegwearSubmenu] = useState(false);

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
                            <div
                                show={sareesSubmenu}
                                onMouseEnter={() => setSareesSubmenu(true)}
                                onMouseLeave={() => setSareesSubmenu(false)}
                                style={{ position: "relative" }}
                            >
                                <DropdownLink to="/sarees">Sarees</DropdownLink>
                                <MdOutlineKeyboardArrowRight
                                    size={15}
                                    style={{
                                        float: "right",
                                        marginRight: "20px",
                                        color: "#000",
                                    }}
                                />
                            </div>
                            <br />
                            <DropdownLink to="/lehenga">
                                Bridal Lehenga
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/gowns">Gowns</DropdownLink>
                            <br />
                            <DropdownLink to="/salwar-readymade">
                                Salwar Readymade
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/salwar-suit">
                                Salwar Suit
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/kurtas">Kurtas</DropdownLink>
                            <br />
                            <DropdownLink to="/tops">Tops</DropdownLink>
                            <br />
                            <div
                                show={legwearSubmenu}
                                onMouseEnter={() => setLegwearSubmenu(true)}
                                onMouseLeave={() => setLegwearSubmenu(false)}
                                style={{ position: "relative" }}
                            >
                                <DropdownLink to="leg-wear">
                                    Leg Wear
                                </DropdownLink>
                                <MdOutlineKeyboardArrowRight
                                    size={15}
                                    style={{
                                        float: "right",
                                        marginRight: "20px",
                                        color: "#000",
                                    }}
                                />
                            </div>
                            <br />
                            <h2>MEN</h2>
                            <h2>KIDS</h2>
                        </StyledDropdownContent>
                        <StyledSubmenu
                            sareesSubmenu={sareesSubmenu}
                            onMouseEnter={() => setSareesSubmenu(true)}
                            onMouseLeave={() => setSareesSubmenu(false)}
                        >
                            <DropdownLink to="/floral-kanchipuram">
                                Floral Kanchipuram
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/kanchipuram-traditional">
                                Kanchipuram Traditional Silk
                            </DropdownLink>
                            <DropdownLink to="/kanchipuram-soft-silk">
                                Kanchipuram Soft Silk
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/fancy">Fancy</DropdownLink>
                            <br />
                            <DropdownLink to="/designer">Designer</DropdownLink>
                            <br />
                            <DropdownLink to="/banarasi-silk">
                                Banarasi Silk
                            </DropdownLink>
                            <br />
                            <DropdownLink to="kerala-set-saree">
                                Kerala Set Saree
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/art-silk">Art Silk</DropdownLink>
                            <br />
                            <DropdownLink to="/jute-silk">
                                Jute Silk
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/linen">Linen</DropdownLink>
                            <br />
                            <DropdownLink to="tussar-silk">
                                Tussar Silk
                            </DropdownLink>
                        </StyledSubmenu>
                        <LegwearSubmenu
                            legwearSubmenu={legwearSubmenu}
                            onMouseEnter={() => setLegwearSubmenu(true)}
                            onMouseLeave={() => setLegwearSubmenu(false)}
                        >
                            <DropdownLink to="/jeggings">Jeggings</DropdownLink>
                            <br />
                            <DropdownLink to="/ladies-pants">
                                Ladies Pants
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/palazo">Palazo</DropdownLink>
                            <br />
                        </LegwearSubmenu>
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
                            <br />
                            <DropdownLink to="/return-policy">
                                Return Policy
                            </DropdownLink>
                            <br />
                            <DropdownLink to="/terms-of-service">
                                Terms Of Service
                            </DropdownLink>
                            <br />
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
