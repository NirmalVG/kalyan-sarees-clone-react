import React from "react";
import { Wrapper } from "../styles/Wrapper.styled";
import { FlexImage } from "../styles/FlexImage.styled";
import featuredCollection from "../../data/featuredCollections";
import { Button } from "../styles/Button.styled";
import { Center } from "../styles/Center.styled";
import { Flex } from "../styles/Flex.styled";

const FeaturedCollection = () => {
    return (
        <div>
            <h3>Featured Collection</h3>
            <p>
                Treasure these magical pieces and spread happiness & joy every
                time you drape them.
            </p>
            <Wrapper>
                {featuredCollection.map((featured, index) => (
                    <Flex key={index}>
                        <FlexImage
                            src={`images/${featured.image}`}
                            alt={featured.name}
                        />
                        <h6>{featured.name}</h6>
                        <p>₹ {featured.price}</p>
                        <a href="#!">ADD TO CART</a>
                    </Flex>
                ))}
            </Wrapper>
            <Center>
                <Button>Shop All Bestsellers</Button>
            </Center>
        </div>
    );
};

export default FeaturedCollection;
