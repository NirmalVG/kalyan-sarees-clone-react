import React from "react";
import Slider from "./Slider";

const config = [
    {
        title: "Image One",
        Image: "images/floral-violet-saree-banner.jpg",
        color: "#512371b8"
    },
    {
        title: "Image Two",
        Image: "images/green-saree-banner.jpg",
        color: "#869348c7"
    },
    {
        title: "Image Three",
        Image: "images/floral-pink-saree-banner.jpg",
        color: "#d86c6ec4"
    },
    {
        title: "Image Four",
        Image: "images/floral-yellow-saree-banner.jpg",
        color: "#c59819cc"
    },
    {
        title: "Image Five",
        Image: "images/mens-collections-banner.jpg",
    },
    {
        title: "Image Six",
        Image: "images/unforgettable-bridals-banner.jpg",
        color: "none"
    },
    {
        title: "Image Seven",
        Image: "images/violet-bridals-banner.jpg",
    },
    {
        title: "Image Eight",
        Image: "images/green-bridals-banner.jpg",
    },
    {
        title: "Image Nine",
        Image: "images/pink-bridals-banner.jpg",
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
