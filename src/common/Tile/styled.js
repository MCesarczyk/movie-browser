import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledTile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    padding: ${({ oversize }) => oversize ? "40px" : "16px"};
    display: grid;
    grid-template-areas: 
        "image image"
        "image image"
        "content desc";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto 1fr;
    flex-direction: ${({ oversize }) => oversize ? "row" : "column"};
    gap: ${({ oversize }) => oversize ? "40px" : "8px"};

    ${({ oversize }) => oversize && css`
        grid-template-areas: 
            "image content"
            "image content"
            "image desc";

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            grid-template-areas: 
                "image content"
                "image content"
                "desc desc";
        }    
    `}

        
`;

export const Image = styled.img.attrs(props => ({
    width: props.width || 177,
    mobile: props.mobile || 120,
}))`
    grid-area: image;
    display: block;
    aspect-ratio: 2/3;
    width: ${props => props.width};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: ${props => props.mobile};
    }
`;

export const TileContent = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    text-align: ${({ minimal }) => minimal ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "22px"};
    line-height: 1.2;
    margin-top: 8px;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
    }    
`;

export const SubTitle = styled.span`
    font-weight: 400; 
    text-align: ${({ minimal }) => minimal ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "16px"};
    font-size: ${({ minimal }) => minimal ? "18px" : "16px"};
    line-height: 1.2;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "12px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
    }    
`;

export const Details = styled.div`
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
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-bottom: 12px;
        gap: 8px;
    }
`;

export const Tag = styled.span`
    padding: 8px 16px;
    margin-top: ${({ oversize }) => oversize ? "24px" : "0px"};
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "0px"};
    font-size: 14px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 10px;
        padding: 4px 8px;
    }    
`;

export const TileExtraContent = styled.div`
    margin-top: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-top: 0px;
    }
`;

export const Rating = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin-left: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
    }    
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
    font-size: 16px;
    line-height: 1.2;
    margin-left: 12px;
    align-self: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
    }
`;

export const Description = styled.p`
    grid-area: desc;
    display: block;
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0px;
    font-weight: 400;
`;
