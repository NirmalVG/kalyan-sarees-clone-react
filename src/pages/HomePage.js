import React from "react";
import { Container } from "../components/styles/Container.styled";
import YoutubeVideo from "../components/ui/YoutubeVideo";
import ExperienceShopping from "../components/ui/ExperienceShopping";
import FeaturedCollection from "../components/ui/FeaturedCollection";
import DiscountSale from "../components/ui/DiscountSale";
import SareeImageGrid from "../components/ui/SareeImageGrid";
import Banner from "../components/ui/Banner";
import StoreAd from "../components/ui/StoreAd";
import SliderContainer from "../components/ui/SliderContainer";
import ScrollContainer from "../components/ui/ScrollContainer";

const Homepage = () => {
    return (
        <>
            <SliderContainer />
            <Container>
                <YoutubeVideo />
                <ExperienceShopping />
                <SareeImageGrid />
                <FeaturedCollection />
                <DiscountSale />
                <Banner />
            </Container>
            <StoreAd />
            <ScrollContainer />
        </>
    );
};

export default Homepage;
