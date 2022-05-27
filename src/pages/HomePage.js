import React from "react";
import { Container } from "../components/styles/Container.styled";
import YoutubeVideo from "../components/ui/YoutubeVideo";
import ExperienceShopping from "../components/ui/ExperienceShopping";
import FeaturedCollection from "../components/ui/FeaturedCollection";
import DiscountSale from "../components/ui/DiscountSale";
import SareeImageGrid from "../components/ui/SareeImageGrid";

const Homepage = () => {
    return (
        <Container>
            <YoutubeVideo />
            <SareeImageGrid />
            <ExperienceShopping />
            <FeaturedCollection />
            <DiscountSale />
        </Container>
    );
};

export default Homepage;
