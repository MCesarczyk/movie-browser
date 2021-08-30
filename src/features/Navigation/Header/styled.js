import styled from "styled-components";

export const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.color.white};
    line-height: 40px;
    flex-wrap: nowrap; 
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 16px;
        line-height: 20px;
    }
`;


export const Icon = styled.img`
    width: 34px;
    @media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
        width: 14px;
      }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 20px;
    }
     
`;


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: nowrap;
    width: 100%;
    @media(max-width: ${({theme}) => theme.breakpoint.mobileMin}px) {
        flex-basis: 100%;
      }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
    }
`;

