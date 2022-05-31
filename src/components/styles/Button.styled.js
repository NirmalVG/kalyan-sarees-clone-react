import styled from "styled-components";

export const Button = styled.button`
    height: 44px;
    width: 200px;
    background-color: #1b1b1b;
    color: #f7f7f7;
    padding: 14px 10px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

export const FirstButton = styled.button`
    position: absolute;
    top: 5%;
    left: 23%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 40%);
    color: white;
    font-size: 13px;
    font-weight: 600;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: rgb(0 0 0 / 60%);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 11px;
    }
`;

export const SecondButton = styled.button`
    position: absolute;
    top: 10%;
    left: 30%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 40%);
    color: white;
    font-weight: 600;
    font-size: 13px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: rgb(0 0 0 / 60%);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 11px;
    }
`;

export const ThirdButton = styled.button`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 40%);
    color: white;
    font-weight: 600;
    font-size: 13px;
    padding: 12px 12px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 80%;

    &:hover {
        background-color: rgb(0 0 0 / 60%);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 11px;
        width: 55%;
    }
`;

export const FourthButton = styled.button`
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 40%);
    color: white;
    font-weight: 600;
    font-size: 13px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: rgb(0 0 0 / 60%);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 11px;
    }
`;

export const AdButton = styled.button`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #2a2a2a;
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 50%;
        top: 50%;
        left: 50%;
    }
`;

export const DiscountButton = styled.button`
    position: absolute;
    top: 10%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #93af76;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 5px 8px;
    border: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`;
