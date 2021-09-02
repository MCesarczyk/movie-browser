import styled from "styled-components";

export const TileList = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ columnNumber }) => columnNumber}, 1fr);
    gap: ${({ gapsize }) => gapsize};
`;