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

export const SectionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
`;