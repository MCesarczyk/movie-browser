import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
display: flex;
justify-content: center;
background-color: ${({ theme }) => theme.color.black};
list-style: none;
margin: 0;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.color.white};
text-decoration: none;
    &.${activeClassName} {
        font-weight: bold;;
    }
    &:hover {
        text-decoration: underline;
       
    }
`;

export const Item = styled.li`
margin: 20px;
text-transform: uppercase;
text-decoration: none;
`;
