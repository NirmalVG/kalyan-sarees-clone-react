import React from "react";
import { FaPinterest, FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FooterLogo, StyledFooter } from "../styles/Footer.styled";
import { Container } from "../styles/Container.styled";
import { SocialIcons } from "../styles/SocialIcons.styled";
import { Center } from "../styles/Center.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialIcons>
                    <li>
                        <a href="https://facebook.com">
                            <FaFacebookF size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://pinterest.com">
                            <FaPinterest size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <AiFillInstagram size={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com">
                            <FaYoutube size={25} />
                        </a>
                    </li>
                </SocialIcons>
                {/*<Center>
                    <ul>
                        <li>
                            <a href="https://kalyansarees.co.in/terms-of-service/">
                                TOS
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/shipping-policy/">
                                Shipping Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/return-policy/">
                                Return Policy
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/about-us/">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/wp-content/vt/index.htm">
                                Store Tour
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/order-tracking/">
                            Track your Order
                            </a>
                        </li>
                        <li>
                            <a href="https://kalyansarees.co.in/kalyan-sarees-contact-us-number/">
                            Contact
                            </a>
                        </li>
                    </ul>
                </Center>*/}
                <Center>
                    <FooterLogo src="images/footer-logo.png" alt="Logo" />
                </Center>
                <Center>
                    <p>
                        Powered by <a href="www.netstager.com">Netstager</a>
                    </p>
                </Center>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
