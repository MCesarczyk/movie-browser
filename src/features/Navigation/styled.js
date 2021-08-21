import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.black};
    list-style: none;
    margin: 0;
`;

export const Item =styled.li`
    margin: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
        text-decoration: underline;
    }
`;
