import React from "react";
import { Container } from "../styles/Container.styled";
import { BannerGrid } from "../styles/Grid.styled";
import { BannerImage } from "../styles/GridImage.styled";
import { BannerItem } from "../styles/GridItem.styled";

const Banner = () => {
    return (
        <Container>
            <BannerGrid>
                <BannerItem>
                    <BannerImage />
                </BannerItem>
            </BannerGrid>
        </Container>
    );
};

export default Banner;
