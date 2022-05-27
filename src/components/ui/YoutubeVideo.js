import React from "react";
import { Center } from "../styles/Center.styled";

const YoutubeVideo = () => {
    return (
        <Center>
            <iframe
                width="100%"
                height="550"
                src="https://www.youtube.com/embed/XFBXLTB56zw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Center>
    );
};

export default YoutubeVideo;
