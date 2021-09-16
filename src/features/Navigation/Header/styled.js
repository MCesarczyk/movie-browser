import { NavLink } from "react-router-dom";
import styled from "styled-components";

const mediumScreen = ({ theme }) => theme.breakpoint.mediumScreen;
const mobileMax = ({ theme }) => theme.breakpoint.mobileMax;
const mobileMin = ({ theme }) => theme.breakpoint.mobileMin;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding-left: 80px;
    gap: 16px;
    
    @media (max-width: ${mediumScreen}) {
        padding-left: 48px;
        gap: 12px;
    }
    
    @media (max-width: ${mobileMax}) {
        padding-left: 20px;
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
        color: ${({theme}) => theme.color.stormGrey};
    }
    
    @media (max-width: ${mobileMax}) {
        font-size: 13px;
        line-height: 16px;
    }
`;
