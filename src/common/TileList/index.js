import styled from "styled-components";

export const TileList = styled.div`
    display: grid;
    min-width: ${({ theme }) => theme.breakpoint.mobileMin};
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        grid-template-columns: repeat(3, 1fr);
        gap: 21px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;