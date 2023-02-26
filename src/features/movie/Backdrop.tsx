import styled from "styled-components";

import Votes from "common/Votes";


interface BackdropProps {
    sizes: string[];
    imageBaseUrl: string;
    imagePath: string;
    title: string;
    rating: number;
    votes: number;
};

export const Backdrop = ({
    sizes,
    imageBaseUrl,
    imagePath,
    title,
    rating,
    votes
}: BackdropProps) => {
    return (
        <BackdropContainer>
            <BackdropPoster
                sizes={sizes}
                baseUrl={imageBaseUrl}
                path={imagePath}
            >
                <WrapperBackdrop >
                    <WrapperContent>
                        <Title>{title}</Title>
                        <Votes
                            backdrop={'true'}
                            votes={votes}
                            rating={rating}
                        />
                    </WrapperContent>
                </WrapperBackdrop>
            </BackdropPoster>
        </BackdropContainer>
    );
};

export const BackdropContainer = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
`;

export const BackdropPoster = styled.div<{ baseUrl: string, sizes: string[], path: string }>`
    background-image: url("${({ baseUrl }) => baseUrl}${({ sizes }) => sizes[4]}${({ path }) => path}");
    background-repeat: no-repeat; 
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    aspect-ratio: 2;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        background-image: url("${({ baseUrl }) => baseUrl}${props => props.sizes[3]}${({ path }) => path}");
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        background-image: url("${({ baseUrl }) => baseUrl}${props => props.sizes[2]}${({ path }) => path}");
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        background-image: url("${({ baseUrl }) => baseUrl}${props => props.sizes[1]}${({ path }) => path}");
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        background-image: url("${({ baseUrl }) => baseUrl}${props => props.sizes[0]}${({ path }) => path}");
    }
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
    height: 100%;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const WrapperContent = styled.div`
    max-width: ${({ theme }) => theme.dimension.maxWidth};
    color: ${({ theme }) => theme.color.white};
    margin: 0 auto;  
    margin-bottom: 56px;
    width: 100%;
    padding: 0% 3%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin-bottom: 26px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        margin-bottom: 46px;
    }
       
    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        margin-bottom: 36px;
    }
  
    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        margin-bottom: 16px;
    }
        
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
        margin-bottom: 8px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.white};
    font-size: 64px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        font-size: 24px;
        margin-bottom: 6px;
        margin-left: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
            font-size: 51px;
            margin-bottom: 16px;
        }
       
        @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
            font-size: 38px;
            margin-bottom: 10px;
        }
  
        @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
            font-size: 14px;
            margin-bottom: 4px;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}) {
            font-size: 12px;
            margin-bottom: 2px;
        }
    }
`;
