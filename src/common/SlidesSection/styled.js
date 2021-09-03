import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 100%;
    margin: 64px auto;
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;

export const SectionMiddleContainer = styled.div`
    width: ${({ theme }) => theme.dimension.maxWidth};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        width: 1012px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        width: 800px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 520px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        width:320px;
    }
`;

export const SectionListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        gap: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        gap: 16px;
    }
`;