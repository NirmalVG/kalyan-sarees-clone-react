import styled from "styled-components";

export const FirstImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/floral-kanchipuram.jpg");
    background-position: left;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        background-position: 0 10%;
    }
`;

export const SecondImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/kanchipuram-traditional-silk.jpg");
    background-position: 30%;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        background-position: 0 10%;
    }
`;
export const ThirdImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/kanchipuram-soft-silk.jpg");
    background-position: 25% 40%;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        background-position: 0 10%;
    }
`;
export const FourthImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/banasari-silk.jpg");
    background-position: 30%;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        background-position: 0 10%;
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/banner.jpg");
    background-position: center;
    background-size: cover;
    transition: all 1s;
    cursor: pointer;
    outline: 2px solid white;
    outline-offset: -15px;

    &:hover {
        transform: scale(1.1);
        outline: 2px solid white;
        outline-offset: -20px;
    }
`;

export const FirstAdImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/banner-view-store.jpg");
    background-size: cover;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

export const SecondAdImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-image: url("images/banner-follow-instagram.jpg");
    background-size: cover;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;
