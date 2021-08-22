import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
display: flex;
list-style: none;
margin: 0;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.color.white};
text-decoration: none;
border-radius: 33px;
padding: 10px;
    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
    &:hover {
    }
`;

export const Item = styled.li`
margin: 20px;
text-transform: uppercase;
text-decoration: none;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  `;

  export const NavigationWrapper = styled.nav`
  max-width: 1368px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  `;

  export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
`;