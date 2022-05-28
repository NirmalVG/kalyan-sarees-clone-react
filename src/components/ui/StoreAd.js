import React from "react";
import { AdGrid } from "../styles/Grid.styled";
import { FirstAdItem, SecondAdItem } from "../styles/GridItem.styled";
import { FirstAdImage, SecondAdImage } from "../styles/GridImage.styled";
import { AdButton } from "../styles/Button.styled";

const StoreAd = () => {
    return (
        <AdGrid>
            <FirstAdItem>
                <FirstAdImage />
                <AdButton>VIEW OUR STORE</AdButton>
            </FirstAdItem>
            <SecondAdItem>
                <SecondAdImage />
                <h4>
                    Follow our store
                    <br />
                    on instagram
                </h4>
                <h5>@KALYANSAREES</h5>
            </SecondAdItem>
        </AdGrid>
    );
};

export default StoreAd;
