import { NavLink } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";


const mediumScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mediumScreen;

export const NavigationContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};
  min-height: 94px;
  padding: 24px;
  width: 100%;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.dimension.maxWidth};
  margin: 0 auto;
  gap: 80px;

  @media(max-width: ${mediumScreen}) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 24px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: nowrap;
  gap: 80px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
    margin: 0 24px;
    gap: 48px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  padding-left: 0;
  align-items: center;
`;

export const Item = styled.li`
  text-transform: uppercase;
  text-decoration: none;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 2px;
  }
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 33px;
  padding: 12px;
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.stormGrey};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.stormGrey};
  }
  
  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 12px;
    padding: 8px;
  }
`;
