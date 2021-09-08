import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledTile = styled.div`
    width: ${props => props.widths[4]};
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
    gap: ${({ oversize }) => oversize ? "24px 40px" : "8px"};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        width: ${props => props.widths[3]};
    }
   
    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        width: ${props => props.widths[2]};
    }
   
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: ${props => props.widths[1]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        width: ${props => props.widths[0]};
        grid-template-areas: 
            "image content"
            "image content"
            "image desc";
        gap: 16px;
    }    

    ${({ oversize }) => oversize && css`
        width: "100%";
        grid-template-areas: 
            "image content"
            "image content"
            "image desc";

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            width: "100%";
            grid-template-areas: 
                "image content"
                "image content"
                "desc desc";
        }    
    `}

    ${({ slide }) => slide && css`
        width: ${props => props.widths[4]};
        grid-template-areas: 
            "image image"
            "image image"
            "content content";
        gap: 16px 24px;
    
        @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
            width: ${props => props.widths[3]};
        }
   
        @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
            width: ${props => props.widths[2]};
        }
    
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            width: ${props => props.widths[1]};
            grid-template-areas: 
                "image image"
                "image image"
                "content content";
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
            width: ${props => props.widths[0]};
        }
    `}  
`;

export const Image = styled.img`
    content: url("${props => props.baseUrl}${props => props.sizes[4]}${props => props.path}");
    width: ${props => props.width};
    grid-area: image;
    display: block;
    align-self: flex-start;
    aspect-ratio: 2/3;
    border-radius: 5px;
    transition: width 1s ease-in-out, left 1.5s ease-in-out;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        content: url("${props => props.baseUrl}${props => props.sizes[3]}${props => props.path}");
    }
   
    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        content: url("${props => props.baseUrl}${props => props.sizes[2]}${props => props.path}");
    }
   
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        content: url("${props => props.baseUrl}${props => props.sizes[1]}${props => props.path}");
        width: ${props => props.mobile};
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        content: url("${props => props.baseUrl}${props => props.sizes[0]}${props => props.path}");
        width: 114px;
    }

    ${({ slide }) => slide && css`
    width: 100%;
    `}
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
    text-align: ${({ slide }) => slide ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "22px"};
    line-height: 28.6px;
    margin-top: 8px;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 16px;
        margin-top: 4px;
        margin-bottom: 8px;
    }  

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        font-size: 20px;
    }
   
    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        font-size: 18px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        font-size: 14px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        font-size: 12px;
    }
`;

export const SubTitle = styled.span`
    font-weight: 400; 
    text-align: ${({ slide }) => slide ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "16px"};
    font-size: ${({ slide }) => slide ? "18px" : "16px"};
    line-height: 1.2;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "12px"};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        margin-bottom: 8px;
    }

    ${({ slide }) => slide && css`
        color: ${({ theme }) => theme.color.darkGrey}
    `}
`;

export const Details = styled.div`
    font-size: 18px;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 12px;
    }
`;

export const DetailTitle = styled.span`
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    }
`;

export const DetailContent = styled.span`
    line-height: 1.2;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${({ oversize }) => oversize ? "24px" : "8px"};
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};
    gap: ${({ oversize }) => oversize ? "16px" : "8px"};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-top: 0px;
        margin-bottom: 8px;
        gap: 8px;
    }
`;

export const Tag = styled.span`
    padding: 8px 16px;
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
    display: flex;
    align-items: baseline;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-top: 0px;
    }
`;

export const StyledLogo = styled.img`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 16px;
        height: 16px;
    }
`;

export const Rating = styled.span`
    font-weight: 600;
    font-size: 22px;
    line-height: 29px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
        line-height: 17px;
    }    
`;

export const RatingScale = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        display: none;
    }
`;

export const Votes = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 13px;
    }
`;

export const Description = styled.p`
    grid-area: desc;
    display: block;
    font-size: 20px;
    line-height: 1.6;
    margin: 0px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 14px;
    }
`;

export const NoVotesText = styled.p`
    margin:0;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkGrey};
`;