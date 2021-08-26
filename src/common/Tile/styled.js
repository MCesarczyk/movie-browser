import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: 40px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-gap: 40px;
`;

export const Image = styled.img`
    max-width: 312px;
    max-height: 464px;
`;

export const ActiveTitle = styled(Link)`
    text-decoration: none;
    color: currentColor;

    &:hover {
        color: darkred;
    }
    
    &:active {
        color: crimson;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin-top: 8px;
`;

export const TileContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubTitle = styled.span`
    font-weight: 400; 
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0px;
`;

export const Details = styled.div`
    display: flex;
`;

export const DetailTitle = styled.span`
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGrey};
`;

export const DetailContent = styled.span`
    font-size: 18px;
    line-height: 1.2;
    margin-left: 10px;
`;

export const Tags = styled.div`
    display: flex;
`;

export const Tag = styled.span`
    padding: 8px 16px;
    margin: 24px 16px 24px 0px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const ExtraContent = styled.div`
    display: flex;
`;

export const Rating = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin-left: 8px;
`;

export const RatingScale = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin-left: 8px;
    align-self: flex-end;
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin-left: 12px;
    align-self: flex-end;
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0px;
    font-weight: 400;
`;
