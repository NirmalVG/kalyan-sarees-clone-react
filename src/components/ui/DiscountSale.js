import React from "react";
import { Wrapper } from "../styles/Wrapper.styled";
import { Flex } from "../styles/Flex.styled";
import { FlexImage } from "../styles/FlexImage.styled";
import { Center } from "../styles/Center.styled";
import { Button } from "../styles/Button.styled";
import discountSale from "../../data/discountSale";

const DiscountSale = () => {
    return (
        <div>
            <h3>DISCOUNT SALE – UP TO 70% OFF!</h3>
            <Wrapper>
                {discountSale.map((discount, index) => (
                    <Flex key={index}>
                        <FlexImage
                            src={`images/${discount.image}`}
                            alt={discount.name}
                        />
                        <h6>{discount.name}</h6>
                        <span>
                            <p>{discount.originalPrice}</p>
                            <p>{discount.price}</p>
                        </span>
                        <a href="#!">ADD TO CART</a>
                    </Flex>
                ))}
            </Wrapper>
            <Center>
                <Button>Special Prices - View All</Button>
            </Center>
        </div>
    );
};

export default DiscountSale;
