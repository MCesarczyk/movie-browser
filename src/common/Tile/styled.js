import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: ${({ oversize }) => oversize ? "40px" : "16px"};
    display: grid;
    grid-template-columns: ${({ oversize }) => oversize ? "auto 1fr" : "auto"};
    grid-gap: ${({ oversize }) => oversize ? "40px" : "8px"};
`;

export const Image = styled.img`
    display: block;
    width: ${props => props.width ? props.width : "100%"};
    border-radius: 5px;
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
    font-size: ${({ oversize }) => oversize ? "36px" : "22px"};
    line-height: 1.2;
    margin-top: 8px;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};
`;

export const TileContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SubTitle = styled.span`
    font-weight: 400; 
    font-size: ${({ oversize }) => oversize ? "36px" : "18px"};
    line-height: 1.2;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};
`;

export const Details = styled.div`
    display: flex;
    margin-bottom: 8px;
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
    flex-wrap: wrap;
    gap: ${({ oversize }) => oversize ? "16px" : "8px"};
    margin-bottom:10px;
`;

export const Tag = styled.span`
    padding: 8px 16px;
    margin-top: ${({ oversize }) => oversize ? "24px" : "0px"};
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "0px"};
    font-size: 14px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const ExtraContent = styled.div`
    display: flex;
    justify-self: flex-end;
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
