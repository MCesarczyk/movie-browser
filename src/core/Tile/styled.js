import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const mediumScreen = ({ theme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }) => theme.breakpoint.oldIphone;
const mobileMin = ({ theme }) => theme.breakpoint.mobileMin;

const baseUrl = props => props.baseUrl;
const path = props => props.path;
const width = props => props.width;
const mobile = props => props.mobile;

export const Image = styled.img`
    content: url("${baseUrl}${(props => props.sizes[4]) || "original"}${path}");
    width: 100%;
    display: block;
    border-radius: 5px;
    transition: transform .5s ease;

    @media (max-width: ${mediumScreen}) {
        content: url("${baseUrl}${(props => props.sizes[3]) || "original"}${path}");
    }
   
    @media (max-width: ${smallScreen}) {
        content: url("${baseUrl}${(props => props.sizes[2]) || "original"}${path}");
    }
   
    @media (max-width: ${mobileMax}) {
        content: url("${baseUrl}${(props => props.sizes[1]) || "original"}${path}");
        width: ${mobile};
    }
  
    @media (max-width: ${oldIphone}) {
        content: url("${baseUrl}${(props => props.sizes[0]) || "original"}${path}");
        width: 114px;
    }

    ${({ oversize }) => oversize && css`
        width: ${width};
    `}
`;

export const StyledTile = styled(Link)`
    text-decoration: none;
    cursor: ${({ oversize }) => oversize ? "auto" : "pointer"};
    color: currentColor;
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
    
    @media (max-width: ${mediumScreen}) {
        width: ${props => props.widths[3]};
    }
   
    @media (max-width: ${smallScreen}) {
        width: ${props => props.widths[2]};
    }
   
    @media (max-width: ${mobileMax}) {
        width: ${props => props.widths[1]};
    }

    @media (max-width: ${oldIphone}) {
        width: ${props => props.widths[0]};
        grid-template-areas: 
            "image content"
            "image content"
            "image desc";
        gap: 16px;
    }    

    &:hover ${Image} {
      transform: ${({ oversize }) => oversize ? "scale(1.0)" : "scale(1.1)"};
    }

    ${({ person }) => person && css`
        width: ${props => props.widths[4]};
        grid-template-areas: 
            "image image"
            "image image"
            "content content";
        gap: 16px 24px;
    
        @media (max-width: ${mediumScreen}) {
            width: ${props => props.widths[3]};
        }
   
        @media (max-width: ${smallScreen}) {
            width: ${props => props.widths[2]};
        }
    
        @media (max-width: ${mobileMax}) {
            width: ${props => props.widths[1]};
            grid-template-areas: 
                "image image"
                "image image"
                "content content";
        }

        @media (max-width: ${oldIphone}) {
            width: ${props => props.widths[0]};
        }
    `}  

    ${({ oversize }) => oversize && css`
        width: "100%";
        grid-template-areas: 
            "image content"
            "image content"
            "image desc";

        @media (max-width: ${mobileMax}) {
            width: "100%";
            grid-template-areas: 
                "image content"
                "image content"
                "desc desc";
        }    
    `}
`;

export const ImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    aspect-ratio: 2/3;
    grid-area: image;
`;

export const PlaceholderImageWrapper = styled.div`
    width: ${width};
    grid-area: image;
    flex-grow: 0;
    align-self: flex-start;
    border-radius: 5px;
    transition: width 1s ease-in-out, left 1.5s ease-in-out;
    
    @media (max-width: ${mobileMax}) {
        width: ${mobile};
    }
  
    @media (max-width: ${oldIphone}) {
        width: 114px;
    }

    ${({ oversize }) => oversize && css`
        width: ${width};
    `}
`;

export const TileContent = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-weight: 600;
    text-align: ${({ person }) => person ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "22px"};
    line-height: 28.6px;
    margin-top: 8px;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "8px"};

    @media (max-width: ${mediumScreen}) {
        font-size: 20px;
        margin-top: 7px;
        margin-bottom: 22px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 18px;
        margin-top: 6px;
        margin-bottom: 20px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 18px;
    }  

    @media (max-width: ${oldIphone}) {
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 16px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 12px;
        margin-top: 3px;
        margin-bottom: 14px;
    }
`;

export const SubTitle = styled.span`
    font-weight: 400; 
    text-align: ${({ person }) => person ? "center" : "left"};
    font-size: ${({ oversize }) => oversize ? "36px" : "16px"};
    font-size: ${({ person }) => person ? "18px" : "16px"};
    line-height: 1.2;
    margin-bottom: ${({ oversize }) => oversize ? "24px" : "12px"};

    @media (max-width: ${mediumScreen}) {
        font-size: 16px;
        margin-bottom: 20px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 14px;
        margin-bottom: 16px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 13px;
        margin-bottom: 12px;
    }
    
    @media (max-width: ${oldIphone}) {
        font-size: 12px;
        margin-bottom: 8px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 11px;
        margin-bottom: 4px;
    }

    ${({ person }) => person && css`
        color: ${({ theme }) => theme.color.darkGrey}
    `}
`;

export const Details = styled.div`
    font-size: 18px;
    margin-bottom: 8px;

    @media (max-width: ${mobileMax}) {
        font-size: 12px;
    }
`;

export const DetailTitle = styled.span`
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGrey};

    @media (max-width: ${mobileMax}) {
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
    
    @media (max-width: ${mobileMax}) {
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

    @media (max-width: ${mediumScreen}) {
        font-size: 13px;
        padding: 7px 14px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 12px;
        padding: 6px 12px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 11px;
        padding: 5px 10px;
    }  

    @media (max-width: ${oldIphone}) {
        font-size: 10px;
        padding: 4px 8px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 9px;
        padding: 3px 6px;
    }
`;

export const Description = styled.p`
    grid-area: desc;
    display: block;
    font-size: 20px;
    line-height: 1.6;
    margin: 0px;
    font-weight: 400;

    @media (max-width: ${mobileMax}) {
        font-size: 14px;
    }
`;