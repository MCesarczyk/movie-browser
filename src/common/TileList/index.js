import styled from "styled-components";

export const TileList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;