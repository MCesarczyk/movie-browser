import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;
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
  @media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
    padding: 2px;
  }
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    padding: 5px;
  }
`;


export const Item = styled.li`
    margin: 20px;
    text-transform: uppercase;
    text-decoration: none;
    
    @media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
      margin: 2px;
    }
    @media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
      margin: 5px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap; 
`;

export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: ${({ theme }) => theme.dimension.maxWidth};
    margin: 0 auto;
    flex-wrap: wrap;
`;

export const NavigationContainer = styled.div`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.black};
    min-height: 94px;
    padding: 15px;
    
 
  
    @media(max-width: ${({theme}) => theme.breakpoint.mobile}px) {
      padding: 5px;
   
    }
    @media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
      padding: 3px;
     
    }
`;