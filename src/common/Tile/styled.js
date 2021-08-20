import styled from "styled-components";

export const StyledTile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 40px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;