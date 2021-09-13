import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const SectionTitle = styled.h2`
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

export const SectionMiddleContainer = styled.div`
    width: ${({ theme }) => theme.dimension.maxWidth};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        width: 900px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 590px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        width: 480px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        width: 320px;
    }
`;

export const SectionListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        gap: 21px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        gap: 16px;
    }
`;