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

const SareeImageGrid = () => {
    return (
        <Container>
            <Grid>
                <FirstItem>
                    <FirstImage />
                </FirstItem>
                <SecondItem>
                    <SecondImage />
                </SecondItem>
                <ThirdItem>
                    <ThirdImage />
                </ThirdItem>
                <FourthItem>
                    <FourthImage />
                </FourthItem>
            </Grid>
        </Container>
    );
};

export default SareeImageGrid;
