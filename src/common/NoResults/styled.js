import styled from "styled-components";

export const Content = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 64px;
    padding: 0 16px;

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

export const NoResultsLogo = styled.img`
    margin: 0 auto;
    display: block;
    Width: 668px;
    Height: 508px;
    margin-top: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        Width: 150px;
        Height: 105px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        Width: 270px;
        Height: 205px;
    }
`;
