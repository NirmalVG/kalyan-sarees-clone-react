import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        height: auto;
    }
`;
export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        height: auto;
    }
`;

export const NavButton = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9),
        inset 0 --3em 3em rgba(3, 3, 3, 0.5);
    transform: translate(0, -50%);
    ${(props) =>
        props.right === true
            ? css`
                  right: 2%;
              `
            : css`
                  left: 2%;
              `}

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: auto;
        height: auto;
    }
`;

export const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgb(0 0 0 / 40%);
    color: white;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 18px 1rem 15px;
    border: none;
    cursor: pointer;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 10px;
    }
`;

export const NumberContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    bottom: 8%;
    left: 50%;
    transform: translate(-50%, 0);
`;

export const Number = styled.div`
    font-size: 15px;
    font-weight: bold;
    ${(props) =>
        props.active === true
            ? css`
                  color: white;
              `
            : css`
                  color: #BEBEBE;
              `}
`;
