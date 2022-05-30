import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover {
        color: #ec1848;
    }
`;
export const StyledDropdownContent = styled.div`
    display: ${({ dropdown, faqsDropdown }) =>
        !dropdown && !faqsDropdown ? "none" : "block"};
    position: absolute;
    background-color: #fff;
    min-width: 350px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 30px 30px;

    h2 {
        font-size: 15px;
        color: black;
    }
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 0;
`;
