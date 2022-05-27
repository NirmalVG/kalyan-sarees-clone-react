import styled from "styled-components"

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