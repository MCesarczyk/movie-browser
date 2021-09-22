import styled from "styled-components";

const mediumScreen = ({ theme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }) => theme.breakpoint.oldIphone;
const mobileMin = ({ theme }) => theme.breakpoint.mobileMin;

export const TileExtraContent = styled.div`
    margin-top: auto;
    display: flex;
    align-items: baseline;
    gap: 8px;

    @media (max-width: ${mobileMax}) {
        margin-top: 0px;
    }
`;

export const StyledLogo = styled.div`
    width: 24px;
    
    @media (max-width: ${mobileMax}) {
        width: 16px;
    }
`;

export const Rating = styled.span`
    font-weight: 600;
    font-size: 22px;
    line-height: 29px;

    @media (max-width: ${mediumScreen}) {
        font-size: 20px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 18px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 16px;
        line-height: 17px;
    }   
    
    @media (max-width: ${oldIphone}) {
        font-size: 14px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 12px;
    }
`;

export const RatingScale = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    @media (max-width: ${mobileMax}) {
        display: none;
    }
`;

export const VotesCount = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    @media (max-width: ${mediumScreen}) {
        font-size: 13px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 12px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 11px;
    }
    
    @media (max-width: ${oldIphone}) {
        font-size: 10px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 9px;
    }
`;

export const NoVotesText = styled.p`
    margin:0;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.darkGrey};

    @media (max-width: ${mediumScreen}) {
        font-size: 15px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 14px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 13px;
    }
    
    @media (max-width: ${oldIphone}) {
        font-size: 12px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 11px;
    }
`;