import styled from "styled-components";

export const Header = styled.h2`
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
