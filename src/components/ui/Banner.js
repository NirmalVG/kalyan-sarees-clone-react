import React from "react";
import { BannerGrid } from "../styles/Grid.styled";
import { BannerImage } from "../styles/GridImage.styled";
import { BannerItem } from "../styles/GridItem.styled";
import { BannerHead, BannerText } from "../styles/Typography.styled";

const Banner = () => {
    return (
        <>
            <BannerGrid>
                <BannerItem>
                    <BannerImage />
                    <BannerHead>SHIPPING GLOBALLY !</BannerHead>
                    <BannerText>
                        Free shipping on all orders within India.
                    </BannerText>
                </BannerItem>
            </BannerGrid>
        </>
    );
};

export default Banner;
