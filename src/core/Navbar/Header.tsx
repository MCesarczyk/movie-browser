import { NavLink } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";
import camera from "./camera.svg";


export const Header = () => (
    <Wrapper>
        <Icon src={camera} alt="" />
        <Title to="/" >Movies&nbsp;Browser</Title>
    </Wrapper>
);

const mediumScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mediumScreen;
const mobileMax = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mobileMax;
const mobileMin = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mobileMin;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 16px;
    
    @media (max-width: ${mediumScreen}) {
        gap: 12px;
    }
    
    @media (max-width: ${mobileMax}) {
        gap: 8px;
    }
`;

export const Icon = styled.img`
    width: 34px;
    
    @media(max-width: ${mobileMin}) {
        width: 14px;
    }

    @media (max-width: ${mobileMax}) {
        width: 20px;
    }
`;

export const Title = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;
    flex-wrap: nowrap; 

    &:focus {
        outline: none;
        color: ${({ theme }) => theme.color.stormGrey};
    }
    
    @media (max-width: ${mobileMax}) {
        font-size: 13px;
        line-height: 16px;
    }
`;
