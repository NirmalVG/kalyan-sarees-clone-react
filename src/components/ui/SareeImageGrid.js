import React from "react";
import { Container } from "../styles/Container.styled";
import { Grid } from "../styles/Grid.styled";
import {
    FirstItem,
    FourthItem,
    SecondItem,
    ThirdItem,
} from "../styles/GridItem.styled";
import {
    FirstImage,
    SecondImage,
    ThirdImage,
    FourthImage,
} from "../styles/GridImage.styled";
import { FirstButton, SecondButton, ThirdButton, FourthButton } from "../styles/Button.styled";

const SareeImageGrid = () => {
    return (
        <Container>
            <Grid>
                <FirstItem>
                    <FirstImage />
                    <FirstButton>Floral Kanchipuram</FirstButton>
                </FirstItem>
                <SecondItem>
                    <SecondImage />
                    <SecondButton>Kanchipuram Traditional Silk</SecondButton>
                </SecondItem>
                <ThirdItem>
                    <ThirdImage />
                    <ThirdButton>Kanchipuram Soft Silk</ThirdButton>
                </ThirdItem>
                <FourthItem>
                    <FourthImage />
                    <FourthButton>Banarasi Silk</FourthButton>
                </FourthItem>
            </Grid>
        </Container>
    );
};

export default SareeImageGrid;
