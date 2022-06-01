import React, { useState } from "react";
import {
    SliderContainer,
    SliderButton,
    NumberContainer,
    Number,
} from "../styles/Slider.styled";
import { ImageContainer } from "../styles/Slider.styled";
import { NavButton } from "../styles/Slider.styled";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Slider = ({ config }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const next = () => {
        setImageIndex((state) => (state += 1));
        if (imageIndex === config.length - 1) {
            setImageIndex(0);
        }
    };

    const prev = () => {
        setImageIndex((state) => (state -= 1));
        if (imageIndex === 0) {
            setImageIndex(config.length - 1);
        }
    };
    return (
        <SliderContainer>
            <ImageContainer src={config[imageIndex].Image} />
            <SliderButton>View Catalogue</SliderButton>
            <NavButton right onClick={next}>
                <MdOutlineKeyboardArrowRight size={60} />
            </NavButton>
            <NavButton left onClick={prev}>
                <MdOutlineKeyboardArrowLeft size={60} />
            </NavButton>
            <NumberContainer>
                {config.map((numbers, index) => (
                    <Number key={numbers.image} active={index === imageIndex}>{numbers.number}</Number>
                ))}
            </NumberContainer>
        </SliderContainer>
    );
};

export default Slider;
