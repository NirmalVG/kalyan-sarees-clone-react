import React, { useState } from "react";
import { ScrollButton } from "../styles/StyledScrollButton.styled";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollContainer = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>
            <ScrollButton style={{ display: visible ? "inline" : "none" }}>
                <MdOutlineKeyboardArrowUp
                    onClick={scrollToTop}
                    size={25}
                    style={{ display: visible ? "inline" : "none" }}
                />
            </ScrollButton>
        </>
    );
};

export default ScrollContainer;
