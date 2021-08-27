import styled from "styled-components";

export const BackdropContainer = styled.div`
    background-color: ${({theme}) => theme.color.black};
    width: 100%;
`;

export const BackdropPoster = styled.div`
    max-width: 1920px;
    max-height: 770px;
    background-repeat: no-repeat; 
    background-position: center;
    background-size: cover;
    margin: 0 auto;
`;

export const WrapperBackdrop = styled.div`
    background: linear-gradient(
        270deg, #000000 14.11%, 
        rgba(0, 0, 0, 0.873268) 15.08%, 
        rgba(0, 0, 0, 0.720529) 16.51%, 
        rgba(0, 0, 0, 0.294577) 19.99%, 
        rgba(0, 0, 0, 0.159921) 21.88%, 
        rgba(0, 0, 0, 0) 25.68%
        ), 
        linear-gradient(
            90deg, #000000 13.6%, 
            rgba(0, 0, 0, 0.984059) 14.58%, 
            rgba(0, 0, 0, 0.967732) 15.44%, 
            rgba(0, 0, 0, 0.865569) 16.3%, 
            rgba(0, 0, 0, 0.230315) 22.87%, 
            rgba(0, 0, 0, 0) 26.64%
            ), 
            linear-gradient(
                180deg, #000000 0%, 
                rgba(0, 0, 0, 0.689555) 4.66%, 
                rgba(0, 0, 0, 0.439033) 9.34%, 
                rgba(0, 0, 0, 0.20628) 15.16%, 
                rgba(0, 0, 0, 0) 24.22%
                ), 
                linear-gradient(
                    189.44deg, 
                    rgba(0, 0, 0, 0) 58.48%, 
                    rgba(0, 0, 0, 0.106473) 63.17%, 
                    rgba(0, 0, 0, 0.235359) 68.85%, 
                    rgba(0, 0, 0, 0.492821) 78.08%, 
                    rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%
                    );
    height: 770px;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.white};
    font-size: 64px;
`;

export const WrapperContent = styled.div`
    max-width: 1368px;
    color: ${({ theme }) => theme.color.white};
    margin-left: 276px;  
    
`;

export const RatingScale = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    margin-left: 8px;
    align-self: flex-end;
`;

export const Votes = styled.p`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
    margin-left: 12px;
    display: flex;
    align-items: center;
`;

export const WrapperRating = styled.div`
  `;

