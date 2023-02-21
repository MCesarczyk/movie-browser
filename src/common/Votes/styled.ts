import styled, { css, DefaultTheme } from "styled-components";

const mediumScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.smallScreen;
const mobileMax = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mobileMax;
const oldIphone = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.oldIphone;
const mobileMin = ({ theme }: { theme: DefaultTheme }) => theme.breakpoint.mobileMin;

export const VotesWrapper = styled.div<{ backdrop: string }>`
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    
    @media (max-width: ${mobileMax}) {
        margin-top: 0px;
    }

    ${({ backdrop }) => backdrop && css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            flex-direction: row;
            align-items: flex-end;
        }    
    `}
`;

export const RatingWrapper = styled.div<{ backdrop: string }>`
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    
    @media (max-width: ${mobileMax}) {
        margin-top: 0px;
    }

    ${({ backdrop }) => backdrop && css`
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;
    `}
`;

export const StyledLogo = styled.div<{ backdrop: string }>`
    width: 24px;
    margin-right: 8px;
    
    @media (max-width: ${mobileMax}) {
        width: 16px;
    }

    ${({ backdrop }) => backdrop && css`
        width: 40px;

        @media (max-width: ${mediumScreen}) {
            width: 16px;
        }
    `}
`;

export const Rating = styled.span<{ backdrop: string }>`
    font-weight: 600;
    font-size: 22px;
    margin-right: 8px;

    @media (max-width: ${mediumScreen}) {
        font-size: 20px;
    }
   
    @media (max-width: ${smallScreen}) {
        font-size: 18px;
    }
  
    @media (max-width: ${mobileMax}) {
        font-size: 16px;
    }   
    
    @media (max-width: ${oldIphone}) {
        font-size: 14px;
    }
    
    @media (max-width: ${mobileMin}) {
        font-size: 12px;
    }

    ${({ backdrop }) => backdrop && css`
        font-weight: 500;
        font-size: 30px;

        @media (max-width: ${mediumScreen}) {
            font-size: 26px;
        }
    
        @media (max-width: ${smallScreen}) {
            font-size: 22px;
        }
    
        @media (max-width: ${mobileMax}) {
            font-size: 18px;
        }   
        
        @media (max-width: ${oldIphone}) {
            font-size: 12px;
        }
        
        @media (max-width: ${mobileMin}) {
            font-size: 10px;
        }
    `}
`;

export const RatingScale = styled.span<{ backdrop: string }>`
    font-weight: 400;
    font-size: 14px;
    margin-right: 12px;

    @media (max-width: ${oldIphone}) {
        display: none;
    }

    ${({ backdrop }) => backdrop && css`
        font-size: 16px;

        @media (max-width: ${mobileMax}) {
            font-size: 10px;
        }

        @media (max-width: ${oldIphone}) {
            display: inherit;
        }
    `}
`;

export const VotesCount = styled.span<{ backdrop: string }>`
    font-weight: 400;
    font-size: 14px;

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

    ${({ backdrop }) => backdrop && css`
        font-weight: 500;
        font-size: 16px;

        @media (max-width: ${mobileMax}) {
            font-size: 10px;
            margin-bottom: 16px;
        }
    `}
`;

export const NoVotesText = styled.p`
    margin:0;
    font-size: 16px;
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