import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px auto;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 32px auto;
    }
`;

export const StyledLink = styled(Link) <{ disabled: boolean }>`
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    margin: 0px 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.mineShaft};

    ${({ disabled }) => disabled && css`
        background-color: ${({ theme }) => theme.color.mystic};
        color: ${({ theme }) => theme.color.woodsmoke};
        cursor: default;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        padding: 8px 12px;
        margin: 0px 4px;
    } 
`;

export const PagerText = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkGrey};
    margin: 0px 8px;
    align-self: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 0px 2px;
        font-size: 10px;
    }
`;

export const PageNumberText = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin: 0px 8px;
    align-self: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 0px 2px;
        font-size: 10px;
    }
`;
