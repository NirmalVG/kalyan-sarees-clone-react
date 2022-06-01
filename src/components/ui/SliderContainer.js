import React from "react";
import Slider from "./Slider";

const config = [
    {
        title: "Image One",
        Image: "images/floral-violet-saree-banner.jpg",
        color: "#512371b8",
        number: "01"
    },
    {
        title: "Image Two",
        Image: "images/green-saree-banner.jpg",
        color: "#869348c7",
        number: "02"
    },
    {
        title: "Image Three",
        Image: "images/floral-pink-saree-banner.jpg",
        color: "#d86c6ec4",
        number: "03"
    },
    {
        title: "Image Four",
        Image: "images/floral-yellow-saree-banner.jpg",
        color: "#c59819cc",
        number: "04"
    },
    {
        title: "Image Five",
        Image: "images/mens-collections-banner.jpg",
        number: "05"
    },
    {
        title: "Image Six",
        Image: "images/unforgettable-bridals-banner.jpg",
        number: "06"
    },
    {
        title: "Image Seven",
        Image: "images/violet-bridals-banner.jpg",
        number: "07"
    },
    {
        title: "Image Eight",
        Image: "images/green-bridals-banner.jpg",
        number: "08"
    },
    {
        title: "Image Nine",
        Image: "images/pink-bridals-banner.jpg",
        number: "09"
    },
];

const SliderContainer = () => {
    return (
        <>
            <Slider config={config} />
        </>
    );
};

export default SliderContainer;
