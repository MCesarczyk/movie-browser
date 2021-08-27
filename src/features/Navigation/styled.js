import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;
    flex-basis: 50%;
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
    flex-wrap: wrap; 
    
`;

export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1368px;
    margin: 0 auto;
    flex-wrap: wrap;
`;

export const NavigationContainer = styled.div`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.black};
    min-height: 94px;
    padding: 15px;
`;