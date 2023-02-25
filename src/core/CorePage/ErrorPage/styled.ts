import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const ErrorPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

export const ErrorIcon = styled.img``;

export const Header = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        font-size: 30px;
        margin-top: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font: 24px;
        margin-top: 36px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        font-size: 18px;
        margin-top: 24px;
    }
`;

export const Section = styled.p`
    font-size: 22px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        font-size: 12px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
    }
`;

const sharedButtonStyle = css`
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.blue};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        font-size: 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 12px;
    }

    &:hover {
        transform: scale(1.05);
        filter: brightness(120%);
        transition: all ease-out 0.5s;
    }

    &:active {
        transform: scale(1);
    }
`;

export const ButtonLink = styled(NavLink)`
    ${sharedButtonStyle}
`;

export const Button = styled.button`
    ${sharedButtonStyle}
`;
