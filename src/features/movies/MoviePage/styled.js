import styled from "styled-components";

export const MoviesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;